'use client';
import frontbanner from "@/public/frontbanner-a.png"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PhoneNumber from 'awesome-phonenumber';
import { parsePhoneNumber } from 'awesome-phonenumber'

// Define constants
const titles = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof'];
const countries = ['United Kingdom', 'United States', 'Canada']; // Add more as needed
const idTypes = ['Passport', 'Driving Licence', 'Citizen ID Card'];
const irataLevels = ['Level 1', 'Level 2', 'Level 3'];

// Step data (same as before)
const stepData = [
  {
    title: "Personal Information",
    subtitle: "Name & Date of Birth",
    body: "As documented in your government issued identification documents. i.e Passport, Driving Licence, Citizen ID Card.",
  },
  {
    title: "Correspondence Address",
    subtitle: "Contact Address",
    body: "Contact address for BeSafety and IRATA to contact you with regards to matters concerning your membership."
  },
  {
    title: "Contact Information",
    subtitle: "Email & Phone Number",
    body: "Your personal Phone and Email contact details for BeSafety and IRATA to contact you with regards to matters concerning your course and membership."
  },
  {
    title: "Identification Documents",
    subtitle: "Government Issued Identification Document Declaration",
    body: "To enable faster identification verification. We ask that you bring the same ID you are registering now, with you on the day of your course. This applies to all levels of certification."
  },
  {
    title: "IRATA Membership & Assessment Level",
    subtitle: "Assessment Level & Existing Membership Details",
    body: "The level to which you want to be assessed, assuming validity criteria have been met. ALL hours have been accounted and signed off in the operators logbook."
  },
  {
    title: "Photo Upload",
    subtitle: "IRATA Membership Photo",
    body: "All new and existing IRATA operator members are required to submit a new photo on each registration/assessment or re-assessment."
  },
  {
    title: "Medical Declaration",
    subtitle: "Candidate Disclaimer",
    body: ""
  },
  {
    title: "Legal Declaration",
    subtitle: "Candidate Liability Release",
    body: ""
  }
];

// Validation schema using Zod with conditional validation via superRefine
const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  firstName: z.string().regex(/^[a-zA-Z\s]+$/, 'First name must contain only letters and spaces').min(1, 'First name is required'),
  middleNames: z.string().regex(/^[a-zA-Z\s]*$/, 'Middle names must contain only letters and spaces').optional(),
  familyName: z.string().regex(/^[a-zA-Z\s]+$/, 'Family name must contain only letters and spaces').min(1, 'Family name is required'),
  dob: z.string().min(1, 'Date of birth is required'), // Refine to date if needed: z.date()
  addressA: z.string().min(1, 'Address is required').max(254),
  addressB: z.string().max(254).optional(),
  city: z.string().min(2, 'City must be at least 2 characters'),
  stateProvinceRegion: z.string().regex(/^[a-zA-Z\s]+$/, 'State/Province/Region must contain only letters and spaces').min(1, 'State/Province/Region is required'),
  postcode: z.string().min(1, 'Postcode is required'),
  country: z.string().min(1, 'Country is required'),
  email: z.string().email('Invalid email'),
  phoneNumber: z.string().refine((val) => {
    const phone = parsePhoneNumber(val);
    return phone.valid;
  }, 'Invalid phone number'),
  govIdType: z.string().min(1, 'Government ID type is required'),
  govId: z.string().min(1, 'Government ID number is required'),
  membership: z.enum(['new', 'member'], { message: 'Membership type is required' }),
  assessmentLevel: z.string().min(1, 'Assessment level is required').optional(),
  irataNumber: z.string().min(1, 'IRATA number is required').optional(),
  photo: z.instanceof(File).refine((file) => file.type.startsWith('image/'), 'Must be an image file'),
  // Add health/legal fields as needed, e.g., agreeToTerms: z.boolean().refine(val => val, 'You must agree to the terms')
}).superRefine((data, ctx) => {
  if (data.membership === 'member') {
    if (!data.assessmentLevel) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Assessment level is required',
        path: ['assessmentLevel'],
      });
    }
    if (!data.irataNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'IRATA number is required',
        path: ['irataNumber'],
      });
    }
  }
});

// Type inference for form data
type FormData = z.infer<typeof schema>;

export default function Register() {
  const [step, setStep] = useState(1);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { control, handleSubmit, formState: { errors }, trigger, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      firstName: '',
      middleNames: '',
      familyName: '',
      dob: '',
      addressA: '',
      addressB: '',
      city: '',
      stateProvinceRegion: '',
      postcode: '',
      country: '',
      email: '',
      phoneNumber: '',
      govIdType: '',
      govId: '',
      membership: undefined,
      assessmentLevel: '',
      irataNumber: '',
      photo: undefined,
    },
  });

  const membership = watch('membership');

  const validateStep = async (fields: (keyof FormData)[]) => {
    return await trigger(fields);
  };

  const handleContinue = async () => {
    let fields: (keyof FormData)[] = [];
    switch (step) {
      case 1: fields = ['title', 'firstName', 'middleNames', 'familyName', 'dob']; break;
      case 2: fields = ['addressA', 'addressB', 'city', 'stateProvinceRegion', 'postcode', 'country']; break;
      case 3: fields = ['email', 'phoneNumber']; break;
      case 4: fields = ['govIdType', 'govId']; break;
      case 5: fields = ['membership', 'assessmentLevel', 'irataNumber']; break;
      case 6: fields = ['photo']; break;
      case 7: fields = []; // Health: add fields if any
      case 8: fields = []; // Legal: add fields if any
    }
    const valid = await validateStep(fields);
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // TODO: Implement server-side submission, e.g., via Next.js API route or server action
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('photo', file);
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <select {...field} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Title</option>
                  {titles.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              )}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="First/Given Name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            <Controller
              name="middleNames"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Middle Names" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.middleNames && <p className="text-red-500 text-sm">{errors.middleNames.message}</p>}
            <Controller
              name="familyName"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Surname, Family or Last Name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.familyName && <p className="text-red-500 text-sm">{errors.familyName.message}</p>}
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <input type="date" {...field} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Controller
              name="addressA"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Address" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.addressA && <p className="text-red-500 text-sm">{errors.addressA.message}</p>}
            <Controller
              name="addressB"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Address Line 2" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.addressB && <p className="text-red-500 text-sm">{errors.addressB.message}</p>}
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Town/City" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            <Controller
              name="stateProvinceRegion"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="State/Province/Region" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.stateProvinceRegion && <p className="text-red-500 text-sm">{errors.stateProvinceRegion.message}</p>}
            <Controller
              name="postcode"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Postcode" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.postcode && <p className="text-red-500 text-sm">{errors.postcode.message}</p>}
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <select {...field} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              )}
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input {...field} type="email" placeholder="E-mail" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Phone Number (e.g. +447980123456)" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Controller
              name="govIdType"
              control={control}
              render={({ field }) => (
                <select {...field} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Government ID Type</option>
                  {idTypes.map((id) => <option key={id} value={id}>{id}</option>)}
                </select>
              )}
            />
            {errors.govIdType && <p className="text-red-500 text-sm">{errors.govIdType.message}</p>}
            <Controller
              name="govId"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Government ID Number (e.g. 123456789)" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              )}
            />
            {errors.govId && <p className="text-red-500 text-sm">{errors.govId.message}</p>}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <Controller
              name="membership"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="flex items-center">
                    <input type="radio" {...field} value="new" checked={field.value === 'new'} className="mr-2" />
                    New to Rope Access; Level 1 IRATA Training, Assessment & Membership needed.
                  </label>
                  <label className="flex items-center mt-2">
                    <input type="radio" {...field} value="member" checked={field.value === 'member'} className="mr-2" />
                    Existing Level 1, 2 or 3 seeking to gain a new certification or re-validate at a current level.
                  </label>
                </div>
              )}
            />
            {errors.membership && <p className="text-red-500 text-sm">{errors.membership.message}</p>}
            {membership === 'member' && (
              <div className="space-y-4">
                <Controller
                  name="assessmentLevel"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select IRATA Assessment Level</option>
                      {irataLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                    </select>
                  )}
                />
                {errors.assessmentLevel && <p className="text-red-500 text-sm">{errors.assessmentLevel.message}</p>}
                <Controller
                  name="irataNumber"
                  control={control}
                  render={({ field }) => (
                    <input {...field} placeholder="IRATA Number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  )}
                />
                {errors.irataNumber && <p className="text-red-500 text-sm">{errors.irataNumber.message}</p>}
              </div>
            )}
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {photoPreview ? (
                <Image src={photoPreview} alt="Photo Preview" width={175} height={175} className="rounded-full object-cover" />
              ) : (
                <div className="w-[175px] h-[175px] bg-gray-200 rounded-full flex items-center justify-center text-gray-500">No Photo</div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="flex-1 p-2 border rounded-md"
              />
            </div>
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
          </div>
        );
      case 7:
        return (
          <div>
            {/* Medical Declaration - Add content, e.g., checkbox for agreement */}
            <p>Medical declaration content here. Add a checkbox if needed.</p>
          </div>
        );
      case 8:
        return (
          <div>
            {/* Legal Declaration - Add content, e.g., checkbox for agreement */}
            <p>Legal declaration content here. Add a checkbox if needed.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-44">
          <Image src={frontbanner} alt="Banner" fill className="object-cover" />
          <div className="absolute top-4 left-4">
            {/* <Image src="logo.png" alt="Logo" width={64} height={64} /> */}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Progress Bar */}
          <div className="flex space-x-1">
            {stepData.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 rounded-full ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          {/* Step Header */}
          <div>
            <h2 className="text-lg font-bold">{stepData[step - 1].title}</h2>
            <p className="font-semibold text-gray-700">{stepData[step - 1].subtitle}</p>
            <p className="text-sm text-gray-600">{stepData[step - 1].body}</p>
          </div>

          {/* Step Content */}
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
                Back
              </button>
            )}
            {step < stepData.length ? (
              <button type="button" onClick={handleContinue} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Continue
              </button>
            ) : (
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
