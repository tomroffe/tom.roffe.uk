"use client";

import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
  type FieldArrayPath,
  type FieldPath,
} from "react-hook-form";
import {
  Button,
  Label,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import Link from "next/link";
import type { CvDataInput } from "./cv-schema";

// react-hook-form's generic path types can't follow the dynamic template
// strings we build for deeply-nested arrays, so the casts below are the
// standard escape hatch. They are contained to these tiny helpers.
type Form = CvDataInput;
const fieldPath = (name: string) => name as FieldPath<Form>;
const arrayPath = (name: string) => name as FieldArrayPath<Form>;

function rand(): string {
  return Math.random().toString(36).slice(2, 7);
}

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

function Field({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) {
  const { register } = useFormContext<Form>();
  return (
    <div>
      <Label htmlFor={name} className="text-xs">
        {label}
      </Label>
      <TextInput
        id={name}
        sizing="sm"
        placeholder={placeholder}
        {...register(fieldPath(name))}
      />
    </div>
  );
}

/** Editable list of plain strings with add / remove / reorder. */
export function StringList({
  name,
  label,
  multiline,
}: {
  name: string;
  label: string;
  multiline?: boolean;
}) {
  const { control, register } = useFormContext<Form>();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: arrayPath(name),
  });

  return (
    <fieldset className="rounded-md border border-gray-200 p-3 dark:border-gray-700">
      <legend className="px-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
        {label}
      </legend>
      <div className="flex flex-col gap-2">
        {fields.map((field, i) => (
          <div key={field.id} className="flex items-start gap-1">
            {multiline ? (
              <Textarea
                rows={2}
                className="grow text-sm"
                {...register(fieldPath(`${name}.${i}`))}
              />
            ) : (
              <TextInput
                sizing="sm"
                className="grow"
                {...register(fieldPath(`${name}.${i}`))}
              />
            )}
            <div className="flex shrink-0 gap-1">
              <Button
                size="xs"
                color="light"
                disabled={i === 0}
                onClick={() => move(i, i - 1)}
                title="Move up"
              >
                ↑
              </Button>
              <Button
                size="xs"
                color="light"
                disabled={i === fields.length - 1}
                onClick={() => move(i, i + 1)}
                title="Move down"
              >
                ↓
              </Button>
              <Button
                size="xs"
                color="red"
                onClick={() => remove(i)}
                title="Remove"
              >
                ✕
              </Button>
            </div>
          </div>
        ))}
        <Button
          size="xs"
          color="light"
          className="self-start"
          onClick={() => append("" as never)}
        >
          + Add
        </Button>
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Bullets (short / long / shared)                                     */
/* ------------------------------------------------------------------ */

function BulletsFields({ basePath }: { basePath: string }) {
  return (
    <div className="flex flex-col gap-3">
      <StringList name={`${basePath}.short`} label="Short bullets" multiline />
      <StringList name={`${basePath}.long`} label="Long bullets" multiline />
      <StringList
        name={`${basePath}.shared`}
        label="Shared bullets"
        multiline
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export function ContactFields() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Field name="contact.phoneDisplay" label="Phone (display)" />
      <Field name="contact.phoneTel" label="Phone (tel:)" />
      <Field name="contact.email" label="Email" />
      <Field name="contact.website" label="Website (display)" />
      <Field name="contact.websiteHref" label="Website (href)" />
      <div className="md:col-span-2">
        <StringList name="contact.printAddress" label="Print address lines" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export function EducationFields() {
  const { control, register } = useFormContext<Form>();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "education.training",
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-3 md:grid-cols-3">
        <Field name="education.degree.title" label="Degree title" />
        <Field name="education.degree.institution" label="Institution" />
        <Field name="education.degree.note" label="Note" />
      </div>
      <fieldset className="rounded-md border border-gray-200 p-3 dark:border-gray-700">
        <legend className="px-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
          Training / certifications
        </legend>
        <div className="flex flex-col gap-2">
          {fields.map((field, i) => (
            <div key={field.id} className="flex items-end gap-1">
              <div className="grow">
                <Label className="text-xs">Name</Label>
                <TextInput
                  sizing="sm"
                  {...register(`education.training.${i}.name`)}
                />
              </div>
              <div className="grow">
                <Label className="text-xs">Note</Label>
                <TextInput
                  sizing="sm"
                  {...register(`education.training.${i}.note`)}
                />
              </div>
              <div className="flex shrink-0 gap-1 pb-px">
                <Button
                  size="xs"
                  color="light"
                  disabled={i === 0}
                  onClick={() => move(i, i - 1)}
                >
                  ↑
                </Button>
                <Button
                  size="xs"
                  color="light"
                  disabled={i === fields.length - 1}
                  onClick={() => move(i, i + 1)}
                >
                  ↓
                </Button>
                <Button size="xs" color="red" onClick={() => remove(i)}>
                  ✕
                </Button>
              </div>
            </div>
          ))}
          <Button
            size="xs"
            color="light"
            className="self-start"
            onClick={() => append({ name: "", note: "" })}
          >
            + Add training
          </Button>
        </div>
      </fieldset>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Skill groups (platforms) and skill sections (software / cloud)      */
/* ------------------------------------------------------------------ */

export function SkillGroupList({ name }: { name: "platforms" }) {
  const { control, register } = useFormContext<Form>();
  const { fields, append, remove, move } = useFieldArray({ control, name });

  return (
    <div className="flex flex-col gap-3">
      {fields.map((field, i) => (
        <div
          key={field.id}
          className="rounded-md border border-gray-200 p-3 dark:border-gray-700"
        >
          <div className="mb-2 flex items-end gap-1">
            <div className="grow">
              <Label className="text-xs">Label</Label>
              <TextInput sizing="sm" {...register(`${name}.${i}.label`)} />
            </div>
            <div className="flex shrink-0 gap-1 pb-px">
              <Button
                size="xs"
                color="light"
                disabled={i === 0}
                onClick={() => move(i, i - 1)}
              >
                ↑
              </Button>
              <Button
                size="xs"
                color="light"
                disabled={i === fields.length - 1}
                onClick={() => move(i, i + 1)}
              >
                ↓
              </Button>
              <Button size="xs" color="red" onClick={() => remove(i)}>
                ✕
              </Button>
            </div>
          </div>
          <StringList name={`${name}.${i}.items`} label="Items" />
        </div>
      ))}
      <Button
        size="xs"
        color="light"
        className="self-start"
        onClick={() => append({ label: "", items: [] })}
      >
        + Add group
      </Button>
    </div>
  );
}

export function SkillSectionList({ name }: { name: "software" | "cloud" }) {
  const { control, register } = useFormContext<Form>();
  const { fields, append, remove, move } = useFieldArray({ control, name });

  return (
    <div className="flex flex-col gap-3">
      {fields.map((field, i) => (
        <div
          key={field.id}
          className="rounded-md border border-gray-200 p-3 dark:border-gray-700"
        >
          <div className="mb-2 flex items-end gap-1">
            <div className="grow">
              <Label className="text-xs">Title</Label>
              <TextInput sizing="sm" {...register(`${name}.${i}.title`)} />
            </div>
            <div className="flex shrink-0 gap-1 pb-px">
              <Button
                size="xs"
                color="light"
                disabled={i === 0}
                onClick={() => move(i, i - 1)}
              >
                ↑
              </Button>
              <Button
                size="xs"
                color="light"
                disabled={i === fields.length - 1}
                onClick={() => move(i, i + 1)}
              >
                ↓
              </Button>
              <Button size="xs" color="red" onClick={() => remove(i)}>
                ✕
              </Button>
            </div>
          </div>
          <StringList name={`${name}.${i}.items`} label="Items" />
        </div>
      ))}
      <Button
        size="xs"
        color="light"
        className="self-start"
        onClick={() => append({ title: "", items: [] })}
      >
        + Add section
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Engagements (nested inside a job)                                   */
/* ------------------------------------------------------------------ */

function EngagementsEditor({ jobIndex }: { jobIndex: number }) {
  const { control, register } = useFormContext<Form>();
  const name = `jobs.${jobIndex}.engagements`;
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: arrayPath(name),
  });

  return (
    <fieldset className="rounded-md border border-blue-200 p-3 dark:border-blue-900">
      <legend className="px-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
        Engagements
      </legend>
      <div className="flex flex-col gap-4">
        {fields.map((field, k) => {
          const base = `${name}.${k}`;
          return (
            <div
              key={field.id}
              className="rounded-md border border-gray-200 p-3 dark:border-gray-700"
            >
              <div className="mb-2 flex justify-end gap-1">
                <Button
                  size="xs"
                  color="light"
                  disabled={k === 0}
                  onClick={() => move(k, k - 1)}
                >
                  ↑
                </Button>
                <Button
                  size="xs"
                  color="light"
                  disabled={k === fields.length - 1}
                  onClick={() => move(k, k + 1)}
                >
                  ↓
                </Button>
                <Button size="xs" color="red" onClick={() => remove(k)}>
                  Remove engagement
                </Button>
              </div>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div>
                  <Label className="text-xs">id</Label>
                  <TextInput
                    sizing="sm"
                    {...register(fieldPath(`${base}.id`))}
                  />
                </div>
                <div>
                  <Label className="text-xs">Client</Label>
                  <TextInput
                    sizing="sm"
                    {...register(fieldPath(`${base}.client`))}
                  />
                </div>
                <div>
                  <Label className="text-xs">Role</Label>
                  <TextInput
                    sizing="sm"
                    {...register(fieldPath(`${base}.role`))}
                  />
                </div>
                <div>
                  <Label className="text-xs">Dates</Label>
                  <TextInput
                    sizing="sm"
                    {...register(fieldPath(`${base}.dates`))}
                  />
                </div>
              </div>
              <BulletsFields basePath={`${base}.bullets`} />
            </div>
          );
        })}
        <Button
          size="xs"
          color="light"
          className="self-start"
          onClick={() =>
            append({
              id: `eng-${rand()}`,
              client: "",
              role: "",
              dates: "",
              bullets: {},
            } as never)
          }
        >
          + Add engagement
        </Button>
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Jobs                                                                */
/* ------------------------------------------------------------------ */

/** Full edit form for a single job, used on the per-role page. */
export function JobFields({ index }: { index: number }) {
  const { control, register } = useFormContext<Form>();
  const base = `jobs.${index}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <Label className="text-xs">id</Label>
          <TextInput sizing="sm" {...register(`${base}.id` as never)} />
        </div>
        <div>
          <Label className="text-xs">Company</Label>
          <TextInput sizing="sm" {...register(`${base}.company` as never)} />
        </div>
        <div>
          <Label className="text-xs">Role</Label>
          <TextInput sizing="sm" {...register(`${base}.role` as never)} />
        </div>
        <div>
          <Label className="text-xs">Dates</Label>
          <TextInput sizing="sm" {...register(`${base}.dates` as never)} />
        </div>
      </div>
      <div>
        <Controller
          control={control}
          name={`${base}.footnoteMark` as never}
          render={({ field: f }) => (
            <ToggleSwitch
              checked={!!f.value}
              label="Footnote mark (positions held during university)"
              onChange={f.onChange}
            />
          )}
        />
      </div>
      <BulletsFields basePath={`${base}.bullets`} />
      <EngagementsEditor jobIndex={index} />
    </div>
  );
}

/** Label for a role row in the index list. */
function jobLabel(job: { company?: string; role?: string }): string {
  return [job.company, job.role].filter(Boolean).join(" — ") || "Untitled role";
}

/**
 * Roles index: reorder / remove / add roles. Each row links to its own edit
 * page. A newly-added role must be saved before its Edit link resolves, since
 * the per-role page reads the role from data.json on the server.
 */
export function JobsList() {
  const { control } = useFormContext<Form>();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "jobs",
  });
  // Watch so the row labels update live as roles are reordered/added.
  const jobs = useWatch({ control, name: "jobs" }) as
    | CvDataInput["jobs"]
    | undefined;

  return (
    <div className="flex flex-col gap-2">
      {fields.map((field, i) => (
        <div
          key={field.id}
          className="flex items-center gap-2 rounded-md border border-gray-200 p-3 dark:border-gray-700"
        >
          <div className="grow">
            <div className="text-sm font-medium">
              {jobLabel(jobs?.[i] ?? {})}
            </div>
            <div className="text-xs text-gray-500">
              {jobs?.[i]?.dates || "—"}
            </div>
          </div>
          <Button
            as={Link}
            href={`/admin/jobs/${jobs?.[i]?.id ?? ""}`}
            size="xs"
            color="light"
          >
            Edit
          </Button>
          <div className="flex shrink-0 gap-1">
            <Button
              size="xs"
              color="light"
              disabled={i === 0}
              onClick={() => move(i, i - 1)}
            >
              ↑
            </Button>
            <Button
              size="xs"
              color="light"
              disabled={i === fields.length - 1}
              onClick={() => move(i, i + 1)}
            >
              ↓
            </Button>
            <Button size="xs" color="red" onClick={() => remove(i)}>
              ✕
            </Button>
          </div>
        </div>
      ))}
      <Button
        color="light"
        className="self-start"
        onClick={() =>
          append({
            id: `job-${rand()}`,
            company: "",
            role: "",
            dates: "",
            bullets: {},
          } as never)
        }
      >
        + Add role
      </Button>
    </div>
  );
}
