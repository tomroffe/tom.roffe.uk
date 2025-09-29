import Header from '@/app/ui/header';
import PrintButton from '@/app/components/print-button';
import ContentToggle from '@/app/components/short-long-toggle';

export default function Layout() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-800">
      <Header />

      <div className="container mx-auto flex flex-wrap px-3 mx:p-5 flex-row items-center justify-center print:hidden">
        {/**/}
        {/* <label className="inline-flex items-center cursor-pointer mr-5"> */}
        {/*   <span className="mr-3 text-sm text-gray-900 dark:text-gray-300">Long</span> */}
        {/*   <input type="checkbox" value="" className="sr-only peer" /> */}
        {/*   <div className="relative w-9 h-5 md:w-14 md:h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] md:after:top-0.5 md:after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-6 md:after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div> */}
        {/*   <span className="ml-3 text-sm text-gray-900 dark:text-gray-300">Short</span> */}
        {/* </label> */}
        <ContentToggle />

        <nav className="flex justify-end text-base border-l border-gray-400">
          <PrintButton />
        </nav>
      </div>
      <div className="mx-4 flex grow flex-col gap-4 md:flex-row">
        <div className="relative mx-auto container max-w-7xl print:max-w-5xl">
          <div className='hidden print:block'>
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-100">Thomas A. Roffe</h1>
            <p className="text-center text-gray-800 dark:text-gray-500 text-sm">Bergholt Road, Colchester</p>
            <p className="text-center text-gray-800 dark:text-gray-500 text-sm">Essex, CO4 5AT</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="md:basis-1/4 md:max-w-64 ">
              <div className="my-4 p-1 mx-1 mb-1 rounded-md dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
                <div className="mx-auto container pl-1 ">
                  <div id="telephone-number" className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 my-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <a href="tel:+447984511551" className="my-1 mx-2">+44 (0)7985 411551</a>
                  </div>
                  <div id="email-address" className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 my-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <a href="mailto:tom.roffe@gmail.com" className="my-1 mx-2">tom.roffe@gmail.com</a>
                  </div>
                  <div id="website" className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 my-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                    </svg>
                    <a href="https://www.roffe.uk/tom" className="my-1 mx-2">www.roffe.uk/tom</a>
                  </div>
                </div>
                <div id="education" className="text-sm mt-1 bg">
                  <p className="font-medium mx-2 my-2">Education</p>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 my-2">Degree</p>
                    <p className="mx-2 pl-5 font">
                      BSc Computer Science
                      <span className="font-bold mx-0.5">@</span>
                    </p>
                    <p className="mx-2 pl-5 font-light">
                      Uni. of Greenwich
                    </p>
                    <p className="mx-2 pl-5 text-xs font-light">Completed upto 3<sup>rd</sup>
                      Year</p>
                  </div>
                  <p className="font-medium mx-2 pl-2 my-3">Industry Training</p>
                  <ul className="text-sm list-disc mx-4 font-light">
                    <li className="mx-5 my-1">Red Hat Certified System Administrator
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">2013➞2016</span></li>
                    <li className="mx-5 my-1">CCNA
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Expired</span></li>
                    <li className="mx-5 my-1">IRATA
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Level 1 2014➞2016</span></li>
                    <li className="mx-5 my-1">Installation & Testing of Class A1 Anchors</li>
                    <li className="mx-5 my-1">First Aid Course
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Expired</span></li>
                    <li className="mx-5 my-1">Selecting Winners Training</li>
                    <li className="mx-5 my-1">MBTI Training Myers-Briggs</li>
                    <li className="mx-5 my-1">
                      HE.NET IPv6 Certified Professional
                    </li>
                    <li className="mx-5 my-1">Fire Marshall Training
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Chubb Plc 2012➞2014</span></li>
                    <li className="mx-5 my-1 ">QA AWS Solution Architect Training
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Uncertified</span></li>
                  </ul>
                </div>
                <div id="hobbies-interests" className="text-sm">
                  <p className="font-medium mx-2 my-3">Hoppies &amp; Interests</p>
                  <div className="text-sm">
                    <p className="m-2 px-2 dark:text-gray-300 font-light">
                      I enjoy many different aspects of computing, maths, science and technology. I&apos;m currently working on several small personal projects with prototyping and control interface hardware (Arduino and RPis). Additionally, I&apos;m working on creating a Stratum 1 NTP server based on the Raspberry Pi platform using GPS as a time source.
                    </p>
                    <p className="m-2 px-2 dark:text-gray-300 font-light">
                      I&apos;m currently a member at a local Weightlifting gym where I regularly go to practise Olympic weightlifting and CrossFit style circuit training and I&apos;m also a keen photographer in my spare time.
                    </p>
                  </div>
                </div>
                <div id="skills" className="text-sm pt-1">
                  <p className="font-medium mx-2 my-1">Industry Skills &amp; Exposure</p>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 my-2">Languages & Scripting</p>
                    <p className="m-2 pl-3">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">Python</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">Go</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">BASH</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">JavaScript</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">HTML</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">CSS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 font-light text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm dark:text-gray-300 border border-gray-400">Rust</span>
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 my-2">OS &amp; Platforms</p>
                    <ul className="mx-2 pl-3 font-light">
                      <li className=" flex flex-wrap text-pretty">
                        <span className="mt-0.5">Linux</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">Ubuntu</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">Debian</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">Redhat</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">CentOS</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">Gentoo</span>
                      </li>
                      <li className="">
                        VMWare
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">ESX</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">ESXi</span>
                      </li>
                      <li className="">Windows
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">NT</span>
                        <span className="text-gray-400 text-xs ">
                          ➞
                        </span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">11</span></li>
                      <li className="">Cisco
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">IOS</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">CatOS</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">ASA</span></li>
                      <li className="">Nexenta
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">FreeNAS</span></li>
                      <li className="">
                        NetApp
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">OnTap</span>
                      </li>
                      <li className="">Apple macOS
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">10</span>
                        <span className="text-gray-400 text-xs ">
                          ➞
                        </span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">14.4</span></li>
                      <li className="">
                        Fortinet
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">Fortigate</span>
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">Fortimanager</span>
                      </li>
                      <li className="">Juniper
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">JunOS</span></li>
                      <li className="">Check Point
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">IPSO</span></li>
                      <li className="">Citrix
                        <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-xs inline-flex items-center px-0.5 m-1 rounded-sm  dark:text-gray-300 border border-gray-400">NetScaler</span></li>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 mt-2">Software</p>
                    <p className="mx-2 my-1 pl-3 flex">
                      <span className="mt-0.5">Services</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Apache</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Nginx</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">MySQL</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">PostgreSQL</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Exim4</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Postfix</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Courier IMAP</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">OpenLDAP</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Asterisk</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">iptables</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Atlassian JIRA</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Confluence</span>
                    </p>
                    <p className="mx-2 pl-3 flex">
                      <span className="mt-0.5">CICD</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Jenkins</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">GitLab</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Tekton</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">GoCD</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Concourse</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">CircleCI</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Github Actions</span>
                    </p>
                    <p className="mx-2 pl-3 flex">
                      <span className="mt-0.5">VPNs</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">OpenVPN</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">WireGuard</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">OpenSwan</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Fortinet IPsec</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Cisco IPsec</span>
                    </p>
                    <p className="mx-2 pl-3 flex">
                      <span className="mt-0.5">Tooling</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Terraform</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Ansible</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Helm</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Packer</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Docker</span>
                    </p>
                    <p className="mx-2 pl-3 flex">
                      <span className="mt-0.5">SCM</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Git</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Perforce</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Subversion</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">CVS</span>
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 mt-2">Cloud Services</p>
                    <p className="mx-2 my-1 pl-3 flex">
                      <span className="mt-0.5">AWS</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">EC2</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">RDS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">KMS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Lambda</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">AWS SSO</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">SNS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">SSM</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Fargate</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">ECS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">ECR</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">EKS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Cloudfront</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Client VPN</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Elasticache</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Cognito</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">GuardDuty</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">SES</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">VPC</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">DirectConnect</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">X-Ray</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Config</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Inspector</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Workspace</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Certificate Manager</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Directory Services</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Directory Services</span>
                    </p>
                    <p className="mx-2 my-1 pl-3 flex">
                      <span className="mt-0.5">Google</span>
                    </p>
                    <p className="mx-2 my-1 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Bucket Storage</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">IAM</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Kubernetes</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Container Registry</span>
                    </p>
                    <p className="mx-2 my-1 pl-3 flex">
                      <span className="mt-0.5">Azure</span>
                    </p>
                    <p className="mx-2 pl-4 font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Entra ID</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Power Automate</span>
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 my-2">Cloud Native Applications</p>
                    <p className="m-2 pl-4 list-none font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Harbor</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Hasicorp Vault</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">OAuth2 Proxy</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Open Policy Agent</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Keycloak</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Cilium</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Multus-CNI</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Longhorn</span>
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 my-2">Data Science Tooling</p>
                    <p className="m-2 pl-5 list-none font-light">
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Openscoring</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Hadoop (HDP)</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">HDFS</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Apache Nifi/Dataflow</span>
                      <span className="dark:bg-gray-600 bg-gray-200 text-gray-600 text-sm inline-flex items-center px-1 mx-0.5 my-0.5 rounded-sm  dark:text-gray-300 border border-gray-400">Jupyter Notebooks</span>
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mx-2 pl-2 my-2">Other</p>
                    <ul className="m-2 pl-5 dark:text-gray-300">
                      <li className="my-1">Cat 5 6 6a STP &amp; UTP Cabling</li>
                      <li className="my-1">Data Cabinet Cleaning</li>
                      <li className="my-1">Refits & Migrations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:basis-3/4 my-4 px-1 mx-1">
              <div id="job-1" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Hybirdaccess Technologies Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    Present ➞ March 2024
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Lead DevOps Engineer</span>
                </p>
                <ul className="short list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Reimplemented CICD platform with greatly improved GitOps intergrations, built times, packaging, build security and integrity (signing, SBOM) for all product platforms and languages</li>
                  <li>Improved product features and deployments, monitoring and alerting</li>
                  <li>Enchanced, updated and added security posture. Identifity management and authentication.</li>
                </ul>
                <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Backups</li>
                  <li>Monitoring Thanos Terraform, Product Intergration</li>
                  <li>IP SNAT Port Range Mapper for LI</li>
                  <li>Intergrated Cilium and Multis CNIs into product Helm chart. Intergrated Prometheus</li>
                  <li>Intergrated Cilium and Multis CNIs into product Helm chart.</li>
                  <li>CI/CD Migration from GOCD to Containerised Jenkins. Multiplatform ARM, AMD, Multiproject Embeded Builds, Cross Arch Builds for Core C product</li>
                </ul>
              </div>
              <div id="job-2" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Altobyte Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    March 2024 ➞ June 2016
                  </p>
                </div>
                <div id="engagement-1" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      BSkyB
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      May 23 ➞ March 24 (3 months rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Senior DevOps Engineer</span>
                  </p>
                  <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Supported three teams (IOS, Android, Big Screen) BAU operations in all areas of operation for building, testing, signing and release. Manged production crash/debug analytics environments Sentry 9.x, self-hosted GitLab instance, vCenter and associated compute and storage (Sanology). Managed hybrid mix of local and virtual mac and virtual compute (Ask me about it!). LXC containers.</li>
                    <li>Migrated on-prem Kubernetes clusters’ workloads to Sky’s GKE based cloud Kubernetes cluster. On-prem used MetalLB and Ceph. Migrated Helm based applications to Terraform HCL. Including three Jenkins and Sentry.</li>
                    <li>Re-write Python 2 application to Python 3 (3.11) and reimplemented application infrastructure storage – PV storage to object-storage based FUSE container driver. Implement authentication and TLS.</li>
                    <li>Designed and built a replacement to Jenkins Groovy scripting for release uploads/artifact submission to a custom Sky endpoint. Removing team dependencies on a legacy Jenkins pipeline. Implemented new functionally in teams Gitlab pipeline.</li>
                    <li>Sourced, designed and migrated old physical switching infrastructure. Replaced existing 10G switches access switches and refreshed the core/aggregation layer switches. Simplified design due to changing compute requirements.</li>
                    <li>Installed new Mac Mini shelfing, hardware (64 M2s). Part refitted and re-cabled data racking around compute needs and lack of HA/Dual homed power/networking on Mac Mini hardware.</li>
                    <li>POC evaluation with IOS team evaluating migrating CICD to CircleCI from Self hosted Gitlab. Resulting in the continuation of the GitLab with some</li>
                    <li>Interviewed several candidates for DevOps positions within the department. Successfully onboarded two engineers to help support the team ongoing. Worked with Grad team to containerise, secure, and deploy a reporting application. Managed work</li>
                    <li>Re-platformed and rearchitected the existing K8 Jenkins CICD platforms for IOS. Migrated Jenkins Master on Virtual Mac OSX Instances to Kubernetes (GKE). Moved local secrets management to Google Secrets Manager. Adapted multibranch and pipeline jobs aligning with Sky’s Jenkins Security Policy. Defined, designed and tested job history retention, backup and restore. Improved asset/cache storage. Implemented group-based AD matrix authentication. Automated backup, plugin updates with git versioned Jenkins configuration as code. Security hardening, SSH whitelisting. Moved all agents to web sockets. Prometheus metric exporting. Grafana monitoring dashboard definitions.</li>
                    <li>Replaced Jenkins CICD platforms for Android and Big Screen/Desktop Teams using experience gained from IOS team migration. Additionally worked with the teams to adapt to the new environments, including adapting pipelines, creating custom build containers, adapted signing operations.</li>
                  </ul>
                  <ul className="short list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Replaced Jenkins CICD platforms for Android and Big Screen/Desktop Teams using experience gained from IOS team migration. Additionally worked with the teams to adapt to the new environments, including adapting pipelines, creating custom build containers, adapted signing operations.</li>
                    <li>Supported iOS, Android, and Big Screen teams in BAU operations for building, testing, signing, and releasing applications.</li>
                    <li>Managed Sentry 9.x, self-hosted GitLab, vCenter, Sanology, and hybrid Mac/virtual compute environments (LXC containers).</li>
                    <li> Migrated on-prem Kubernetes (MetalLB, Ceph) to Sky’s GKE cloud, converting Helm apps to Terraform HCL (Jenkins, Sentry).</li>
                    <li>Rewrote Python 2 app to Python 3.11, shifted storage to object-based FUSE driver, and added authentication/TLS.</li>
                    <li>Replaced Jenkins Groovy scripts with a custom Sky endpoint, integrating new functionality into GitLab pipelines.</li>
                    <li>Upgraded 10G switches and core/aggregation layers to meet new compute demands.</li>
                    <li>Installed 64 Mac Mini M2s, re-cabled data racking to address power/networking limitations.</li>
                    <li>Evaluated CircleCI for CI/CD, retained enhanced GitLab.</li>
                    <li>Onboarded two DevOps engineers; supported grad team in containerizing and deploying a reporting app.</li>
                    <li>Re-platformed iOS Jenkins CI/CD to GKE, integrated Google Secrets Manager, enhanced security, and automated backups.</li>
                    <li>Upgraded Android and Big Screen Jenkins CI/CD, adapting pipelines and build containers.</li>

                  </ul>
                </div>
                <div id="engagement-2" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      HMRC / Equal Experts
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      August 22 ➞ February 23 (12 months)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Platform Security Engineer</span>
                  </p>
                  <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Performing various platform risk audits and security assessments. Enhance and improve existing platform tooling for alerting and compliance. for example HMRCs hmrc/platsec-compliance-alerting and hmrc/platsec-aws-scanner</li>
                    <li>Update and improve existing CI/CD pipeline to include better pre-release testing coverage and security scanning.</li>
                    <li>On-call and platform security support duties on a rotating basis.</li>
                  </ul>
                  <ul className="short list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Performing various platform risk audits and security assessments. Enhance and improve existing platform tooling for alerting and compliance. for example HMRCs hmrc/platsec-compliance-alerting and hmrc/platsec-aws-scanner</li>
                    <li>Update and improve existing CI/CD pipeline to include better pre-release testing coverage and security scanning.</li>
                    <li>On-call and platform security support duties on a rotating basis.</li>
                  </ul>
                </div>
                <div id="engagement-3" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between ">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      HMRC / Equal Experts
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      Jan 22 ➞ August 22 (12 months)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>DevOps engineering for 5 internal HMRC products.</li>
                    <li>Built CI/CD pipelines for a number of mature projects that lacked release pipelines.</li>
                    <li>Reengineered a number of internal HMRC terraform modules to better align infrastructure with HMRCs security standards. Introduced policy-as-code testing framework with custom rules via Checkov.</li>
                    <li>Improved secrets handling via Hashicorp Vault</li>
                  </ul>
                </div>
                <div id="engagement-4" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      BP / CloudIgnite
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      April 21 ➞ Oct 21 (3 months rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">DevSecOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Assist, Administer, Operate and Develop BP’s AWS central logging services. Aggregating service logs and instance logs from ~900 accounts into various object stores by product offering, inline with CloudWatch, VPCFlow Logs, Inventory, Config and CloudTrail services.</li>
                    <li>Re-designed and developed “account provisioning” service, which was responsible for provisioning, deploying and configuring new account services and IAM least privilege access rights to new or existing accounts to enable collection of logs cross-account and cross-region into centralised buckets. Ground up rewrite in OOB Python. Provisioned new account bucket permissions and dealt with oversize IAM policy behaviour, provisioning new CloudWatch log destinations and regional kinesis firehose (CloudWatch log) streams.</li>
                  </ul>
                </div>
                <div id="engagement-5" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Hitachi EU
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      Dec 20 ➞ April 21 (4 months + 1 month extension)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Senior DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Productionise a POC for EV (Electric Vehicle) Fleet Management and Decarbonation Platform. Transforming a small development environment on a single EC2/Docker host to a full infrastructure design and implementation with build, test and release pipelines and dependent services for over 19 microservices running on a diverse and fault tolerant ECS environment. Re-platforming users and services to new development, UAT and production environments while progressing system development in parallel.</li>
                    <li>Further developed Terraform modules and HCL definitions from initial project state (POC) to a multi-layered, multi-tenant application stack in multi-environment IaC deployments.</li>
                    <li>refactored</li>
                    <li>Help develop application authentication flow using AWS Cognito User Pools. Extensive use of Terraform for provisioning tenant/client user pools called programmatically as a part of new customer signing logic.</li>
                    <li>Developed AWS Pipeline MS teams alerting application. Enabling message filtering and dedupe of AWS Pipeline state alert messages. Developed in Python 3.6 and packaged for AWS Lambda functions with corresponding build, package and development pipelines. Utilising AWS CodeDeploy blue/green deployments.</li>
                    <li>Deployed AWS SSO (Single Sign-on) into a single org. account and Integrated SSO into each subordinate org accounts for the business group.</li>
                    <li>Designed and deployed AWS Client VPN with AWS SSO (OAuth2) backing. Implemented robust security and access controls with group based access controls. Implermemented Cross Account VPC peering and associated security controls.</li>
                    <li>Delivered e2e test suite/harness (Karate). Worked closely with test engineers to implement a schedule based test automation platform. Implemented test automation reporting and alerting; delivering failed tests reports to designated developers and test engineers.</li>
                    <li>Designed and partially implemented initial monitoring and alerting services using Prometheus, Alert-Manager and Push Gateway. Metrics and graph visualisations via Grafana.</li>
                  </ul>
                </div>
                <div id="engagement-6" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Ti-Media Ltd / Future Plc
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      Nov 19 ➞ August 20 (3 months rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Senior DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Lead architectural and design steering group for infrastructure team together with the development team for a number of internal system projects to upgrade and update the underlying infrastructure. including some of the development tooling with regards to build, test and release strategies on a number of publications.</li>
                    <li>Deliver POC for Build, Test, Release and Deploy of TI’s subscription ecommerce platform. Platform built with AWS codepipeline, terraform, ECS with EC2 (Originally Fargate) with associated GitOps tooling for build, test and release pipelines to application containers repos.</li>
                    <li>Designed, built and delivered site/content image optimization service which reduced our CDN and traffic transfer cost by approx 30% for non-apple based clients. Image Converters Service allowed for delivery of images encoded in webp for supported browser types, with cdn/cloudfront caching and fallback handling to content origin. Originally designed and written as a Python/Lambda but reimplemented a Flask API due a number of technical limitations integrating webp libraries and size limitation of returned objects.</li>
                    <li>Containerization of new Decanter Magazine Wine Review Node application. Assisting development team integration with new containers into the existing application stack and existing Jenkins pipelines. Provisioned DynamoDB with associated terraform.</li>
                    <li>Assisted Marie Claire development team with initial Lambda deployment and subsequent performance troubleshooting and tuning. This project enabled parallel consumption of supplier feed from approx. 30 large fashion brands, ultimately significantly reducing time to market from initial announcement of product on supplier feed to</li>
                    <li>Integrated X-ray log and event trace handling into a number of hard to debug application to better assist Image Converters Service - webp for supported browser types, with cdn/cloudfront caching and failback handling.</li>
                    <li>IAM policy and account audit for all TI’s AWS accounts, consolidated into AWS IAM Organization for improved policy reporting and enforcement. Integrated Cisco CloudWatch into all org. accounts.</li>
                    <li>Assist team with production incidents and troubleshooting as BAU operations as and when required.Additionally started project planning and initiated terraform layout and repos for POC using EKS for greater service improvement among other things associated with better container management and resource utilisation with Kerbernates.</li>
                    <li>Assisting the legal department with content removal and media from TI’s media library which lead to developing a Python API for removing multiple CDNs cache content and origin source media from TI publication media silos for when legally required/requested.</li>
                    <li>Various administrational Cloudfront and Fastly CDN management tasks and new deployments. Automated repetitive tasks some with Jenkins and Terraform pipelines for fun and profit.</li>
                  </ul>
                </div>
                <div id="engagement-7" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      British Medical Journal
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      June 19 ➞ August 19 (3 month + 1 month extension)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Senior DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Lead design and implementation of rollout of Remove Access / OpenVPN solution based on AWS Client VPN Services. Designed and configured VPC networking, routing, security into existing deployment. Utilised AWS ACM certificate & Managed Active Directory for user authentication and group based authorisation controls. Managed initial rollout to key stakeholders in initial testing and troubleshooting. Worked with inhouse IT support services to roll out OpenVPN application on managed desktops. Integrated VPN networking into existing inhouse AWS VPC Terraform codebase.</li>
                    <li>Extensive work with BMJ Lead developer to develop the design for BMj’s async streaming application in Java spring boot using AWS Kinesis, Lambda and RDS services. Encouraged use of AWS secrets manager for application secrets. Infrastructure implementation in Terraform. Automated application build and deployment pipeline. Performance and Acceptance testing.</li>
                    <li>Jenkins Build Pipeline Improvements, Operations infrastructure focused. Implement Terraform in Docker. Refactor some existing inhouse terraform modules. Move to IAM role based Terraform. Extensive security harding of Jenkins hosts.</li>
                    <li>AMI image creation with packer, bootstrapping base images based on role for faster deployment with view to start using ASGs. implemented prerequisite AWS infrastructure defined in Terraform with fully automated build, bootstrap, deploy and share, use mechanism.</li>
                    <li>Lead group training for terraform and platform support. Training team on use of newly implemented terraform in docker jenkins pipeline pattern. Support developers and operations team members with Terraform tooling and AWS usage in general.</li>
                    <li>Extensive solution, process and tooling documentation for the various new platforms. for example user management process for client VPN.</li>
                    <li>General Application and Operation support of various inhouse applications.</li>
                  </ul>
                </div>
                <div id="engagement-8" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      OpenBanking
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      November 18 ➞ March 19 (3 months rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Terraform IaC built on AWS EC2, RDS, Certificate Manager, KMS, Directory Services, Lambda, SNS, Config, Inspector, SSM, ECS & ECR.</li>
                    <li>Produce and develop docker images within Jenkins pipeline for building various internal and externally hosted applications. Predominantly Python and Node Applications.</li>
                    <li>Rearchitected Terraform codebase to allow more consistent use of shared infrastructure variables, be more DRY and promoted and migrated the use of terraform modules.</li>
                    <li>Central Resource for development team, ensuring effective productionisation of newly developed applications. Ensuring initial capacity, fail-over/fault tolerance method and metrics are captured and recorded, monitored and actioned, monitoring methods, support and deployment playbooks. etc</li>
                    <li>Enabled more effective methods for developers to test and build development docker images on AWS infrastructure.</li>
                    <li>Packer AMI build & Ansible refactoring, Performance improvements. Build was taking over an hour, reduced with role specific AMI builds and pre-installed system pre-requisites.</li>
                    <li>Cost Control: AWS Lambda Function to powered down development infrastructure overnight and weekends.</li>
                  </ul>
                </div>
                <div id="engagement-9" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Camelot Group
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      June 2017 ➞ October 2018 (3 Months Rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Senior DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Terraform IaC built on AWS EC2, RDS, Certificate Manager, KMS, Directory Services, VPC Direct Connect, Lambda, SNS, Config, Inspector, SSM, AWS Workspaces.</li>
                    <li>Part designed and implemented Terraform and Ansible code for the deployment of Infor technologies OCCM and IA products (Java Application with MS SQL backend and HTTP and SMTP public facing services) Single region, multi-AZ deployment. Implemented HLD to POC and Production. Designed and implemented basic build, test, deploy pipeline for future expansion and product upgrades utilising three separate AWS accounts per environment (dev, test, prod).</li>
                    <li>Championed data siloing and least privilege separation for AAA services. covering Windows AD and interdomain trust relationships for both data and application teams.</li>
                    <li>Engineered TrendMicro Deep Security Manager 10 Terraform module for deployment and upgrade of DSM products/virtual devices. Design, tested and deployed DSMs to AWS and enrolled approx. 250 mixed server environments. Agent deployment for Linux hosts was performed with a custom Ansible playbook and windows hosts done via AWS SSM and Windows Powershell. Future versions were baked into both Windows and Linux AMIs via custom packer builds.</li>
                    <li>Built Terraform and CloudFormation integration for part automating the deployment AWS Direct Connect peering into new accounts.</li>
                    <li>Built Terraform modules for CIS 2 compliance checking via AWS Config and filtering and alerting via AWS SNS and Lambda/python. alerts pushed via ChatOps (Google Chat/Hangouts)</li>
                    <li>Git Repo management; code convergence strategies testing plans, pre-commit checking, repo branch locking and security and contribution notifications via ChatOps/webhooks. Common system and application roles had Ansible playbooks rolling into AMI Packer builds.</li>
                    <li>Instrumental in adding Ansible playbook InSpec testing via Vagrant along with code linting to catch the basic errors when writing ansible playbooks.</li>
                    <li>Other tasks, duties and points of note; Operations and Production support duties. Helped select and grow the CloudOps teams from 2 people (self included) to 5 engineers (2 contract, 3 permanent). Attained multiple contract renewals over multiple projects</li>
                  </ul>
                </div>
                <div id="engagement-10" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      ASOS
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      June 2017 ➞ July 2017 (1 Month Rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">Linux System Administrator</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Part-automated installation of or Oracle Java and Oracle Retail Stack using Ansible. OS to APP</li>
                    <li>Implementation plan for FreeIPA configuration for DNS, Kerberos and User Management role out.</li>
                    <li>Supported Oracle Retail Developers on JVM tuning and batch process scheduling and monitoring and alerting.</li>
                    <li>OS User and resource management</li>
                  </ul>
                </div>
                <div id="engagement-11" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Bytesumo Ltd
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      May 2017 (Direct Consulting)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Onsite Hortonworks HDP Cluster buildout - OS Install and HDP Configuration on 3 x Mac G5s</li>
                    <li>OpenVPN Configuration for remote access</li>
                    <li>FreeIPA configuration for DNS, Kerberos and User Management</li>
                    <li>Python, Anaconda Scale, PySpark and Jupyter Setup and Configuration</li>
                    <li>Installation of Spark, TensorFlow, Torch7, Lua and Associated ML toolsets</li>
                    <li>Developed Ansible Playbooks for to bootstrap instances for HDP and Ambari Install, Ensuring all hosts meet the HDP OS requirements,</li>
                    <li>Migrated Large Dataset to new HDFS Cluster</li>
                    <li>Configure new Cisco Switching Infrastructure</li>
                  </ul>
                </div>
                <div id="engagement-12" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      M4 Data
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      May 2017 (Direct Consulting)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>AWS Hortonworks HDP cluster buildout on AWS EC2 Instances and Associated VPC, S3 Bucket Configuration.</li>
                    <li>AWS IAM User creation and management</li>
                    <li>S3 Bucket Configuration for Data Operations</li>
                    <li>Load RAW datasets into S3 for Data Science Team to consume.</li>
                    <li>Sharing Results Data from the Data Science Team with End Customers in a secure and encrypted manner.</li>
                    <li>Security Review of Existing AWs infrastructure. implemented standard recommendations from amazon as a base policy.</li>
                  </ul>
                </div>
                <div id="engagement-13" className="text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 mt-2">
                  <div className="flex justify-between mt-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      HMRC
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                      July 2016 ➞ April 2017 (3 months rolling)
                    </p>
                  </div>
                  <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                    <span className="font-medium">DevOps Engineer</span>
                  </p>
                  <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                    <li>Managed Github Enterprise Services, Atlassian Jira and Confluence Service for 5k users and developers of HMRC Digital teams nationally.</li>
                    <li>Managed backend support system Deskpro, supporting internal HMRC Phone agents and 2nd and 3rd line operation for HMRC Help and Support services for the rate paying public thought tax.service.gov.uk services.</li>
                    <li>Experience of managing public facing systems in constant use with peak load use cases. Successful implemented performance changes prior to self assessment peak. Including web server php-fpm performance tuning, mysql database turning. Performance validation with various load and user journey tests both pre and post changes.</li>
                    <li>Support various database replication and backup scenarios in use throughout the tooling department.</li>
                    <li>End of Life atlassian confluence upgrades and jira upgrade for 6.4 to 7.2</li>
                    <li>Continuous Upgrade of Deskpro Support system, enabled though better automation. Development of Ansible playbooks to enable more predictable upgrades.</li>
                    <li>Migration Project for moving current Puppet CM to Ansible and assisted roles and plays.</li>
                    <li>Development of tooling estate dashboard (aka Doomsday Clock) for current licensing levels for google apps, atlassian products and plugins and deskpro written in python using falcon framework on the backend and static/javascript frontend. This allowed for data to be pushed into Grafana to enable management to better understand the trends in user licensing throughout the year. (manly due to high turnover of staff)</li>
                    <li>Personally responsible for £120K licensing saving for Deskpro. Using a mix of python and sql queries I successfully removed 1200 unused licences that were to be erroneously renewed.</li>
                  </ul>
                </div>
              </div>
              <div id="job-3" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    KPMG UK LLP Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    June 2016 ➞ June 2015
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">DevOps Engineer</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Managed our on-prem Hadoop cluster and oversaw the addition of a new host to the cluster. General user management, YARN/SPARK Job management, HDFS tuning and data ingest tasks.</li>
                  <li>AWS VPC / IPA OpenVPN IPTables integration work. Enabling group based network access controls using the</li>
                  <li>OpenVPN/IPA/ AWS VPC APIs using python via the scripting functions in OpenVPN</li>
                  <li>A large proportion of my duties involved migrating away from puppet and bash scripts to Ansible for automating the bootstrapping and development of applications and services.</li>
                  <li>Work effectively with team members to develop Ora (an internal inventory, compliance and orchestration tool) this enabled other teams within the firm to spin up hadoop cluster(s) (with additional data science tooling) on AWS on a per-project basis via a web interface.</li>
                  <li>AWS training; Solution Architect course, Ansiblefest</li>
                  <li>Jenkins/Packer Builds and Deployment for AWS images</li>
                  <li>Instrumental in packaging, designing and deploying Apache Nifi installation to enable multi stream, massively parallel data collection in near real-time.</li>
                  <li>Implemented Elasticsearch stack with Logstash and Kibana for log visualisations.</li>
                  <li>Leading resource on bringing Openscoring into Production within KPMG. Built RPM packages, Designed the workflow and tooling for effective model deployment. Worked on log monitoring and reporting for billing purposes. Contributed to the Openscoring project and inspired the design of the python Openscoring module.</li>
                  <li>Built the Data Science and Engineering Toolbox images based on CentOS7 for a number of visualisation (VMWare, Xen, Virtualbox, AWS) platforms to facilitate the Data Science team to work remotely on client sites and have a full complement of Data Science tooling at hand in the situations that we was prevented from using our cloud or on premises cluster for data security and data governance reasons.</li>
                  <li>Worked with compliance offers to ensure best practice in data and system security ensuring data safeguards, audit logging and accounting was robust and accurate in accordance with best practice data security methodologies and KPMG policies. data removal was done in an audited and reproducible in an automated manner.</li>
                  <li>Implemented Full Disk Encryption on our existing cluster and automated future deployment of secure hosts utilising LUKS and Ansible.</li>
                </ul>
              </div>
              <div id="job-4" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Qinectic Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    June 2015 ➞ October 2014
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">DevOps Engineer</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Build and design of HA Monitoring, Logging and Analysis platform build on Sensu, logstash, Kibana, elasticsearch, RabbitMQ</li>
                  <li>Extensive orchestration scripting for the deployment, installation and management of various servers hosted on AWS, Rackspace and on dedicated hardware at Colo DC</li>
                  <li>Knowledge of working with N3 (NHS National Network). Change control and data and security policies.</li>
                  <li>Designed, built and implemented RabbitMQ Cluster for application message queues and logging for Sensu monitoring clients.</li>
                  <li>Build, Deploy and Manage Custom applications packages for Debian (deb’s) and Redhat (rpm’s) distributions and repository management with PKI for package signing.</li>
                  <li>Deployment a number of virtual and physical machines with a number of hosting providers. Initial configuration and bootstrap using Ansible.</li>
                  <li>Built custom AWS AMIs for faster deployment of new internal infrastructure and customer solutions</li>
                  <li>Escalation point for customer application support. Including supporting third party customer integrations though the application API and related tools.</li>
                  <li>Upgrades of hosted PHP application. Including migrations from older versions of the codebase to newer packaged versions. Upgrade of customer MySQL database schemas ensuring backup and roll-back procedures are still valid using a manual process or Doctrine</li>
                  <li>Internal Desktop and Network Support including the redeployment of MS Windows AD server (2008R2) from Windows SBS</li>
                  <li>Designed and Built a developer self-service platform for live database export and obfuscation for using medical records in test or development environments using Ansible and Ruby Strike and a PHP front end developed on Symphony</li>
                </ul>
              </div>
              <div id="job-7" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Virtual Internet Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    September 2011 ➞ February 2011
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Systems Engineer</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Supported customers of various sizes from Government Departments, Large Enterprises, SME’s to Individuals under different SLA levels for managed and unmanaged services.</li>
                  <li>Typical Working Week with On-Call & Out of hours working patterns. Variety of work from simple password word resets and domain renewals to complex project work with multiple servers, firewalls switches, sans etc.</li>
                  <li>Provisioning VMware Hosts – ESX1 4.1 vCloud Director, vSphere – Managing, Installing, Troubleshooting ESXi installations</li>
                  <li>Physical Server Provisioning with OS and Software stack configurations on various Windows and Linux platforms.</li>
                  <li>Provision of VMware Cloud Servers and OnApp (Zen) Cloud Servers including custom builds and from templates. Specialized in Hybrid Cloud Implementations.</li>
                  <li>Support customers of remote data centres (Manchester). Liaising with colleges to affect changes such as physical adds, moves and installs etc. Organization of shipping and handling of servers in and out of DC.</li>
                  <li>Planning of initial phase of a server migration project for ~200 Servers from Manchester to new London data centre.</li>
                  <li>In-house & Customer SAN installation and support duties using Nexenta. Including snapshot management, licensing reporting, disk expansion, status & health monitoring.</li>
                  <li>Backups system administration using NetVault including patching, library size expansion, SAN expansion, client support and installation and basic housekeeping duties</li>
                  <li>Sourced, built and configured and administered IP PBX (VoIP) server with Cisco handsets. CLID Lookup with Ticketing System Integration (OTRS) built on Asterisk Phone System/FreePBX</li>
                  <li>In-house and customer system and network monitoring using Zabbix and Cacti</li>
                  <li>Administered and supported a HA Apache platform for High Availability customers with multiple MySQL replicated instances.</li>
                  <li>Administered and supported multiple POP and SMTP servers for a large number of POP Mailbox customers</li>
                  <li>Administered and supported Hosted Exchange Platform</li>
                  <li>Documentation writing – For customer projects and internal infrastructure and systems</li>
                  <li>Regular physical DC security/stock audits, power usage reporting duties</li>
                  <li>Installation, Configuration Management and support of Cisco Switches, Routers and Firewalls (ASA & Pix) with IPS Security modules. Managed multiple instances of IPTables and pfSense for customer solutions with varying needs, size and traffic requirements.</li>
                </ul>
              </div>
              <div id="job-8" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    VPS.NET
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    December 2010
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Contract Systems Engineer</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>1Day Installation of 2 Supermicro based SAN&apos;s running StarWind on Windows 2K8 in Amsterdam, Netherlands at the EvoSwitch Data Center.</li>
                </ul>
              </div>
              <div id="job-9" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Central Height Safety Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    February 2011 ➞ July 2009
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Systems Engineer / Operations Manager</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Designed, Built and hosted company website http://www.centralheightsafety.com/. Built on Linux, PHP Zend Framework, JQuery and MySQL. Designed XHTML/CSS Styling to comply with company brand.</li>
                  <li>Designed and Built and sourced network infrastructure from scratch built on Windows 2003 Server and Debian Linux with Windows XP, Mac OSX clients (some Linux desktops). Installed and configured Switches, Routers and VoIP PBX (Asterisk), and an OpenVPN implementation. Backups and MS Exchange.</li>
                  <li>Analysed, designed and implemented custom CRM, Work bill, job scheduling and asset tracking platform built on Zend Framework (PHP), JQuery and MySQL (with replication) running on Linux Debian 5 (Lenny). With multiple front ends for field service staff via their IPhone and administration staff via a web browser.</li>
                  <li>Single port of call for IT support issues for end user support and server issues. Data Protection and Security duties. Supported a total of 5 Servers (2 Windows 2K3, 3 Linux Debian Systems)</li>
                  <li>Analysed, Sourced & Implemented Time and Attendance System</li>
                  <li>Started implementing an e-commerce site for equipment sales. (Shelved due to budgetary & time constraints).</li>
                  <li>Managed and Implemented successful migration from Microsoft Exchange 2003 to Google Apps Service with an 85% reduction in operating and maintenance cost.</li>
                  <li>Designed and built internal web database application for tracking of staff and training equipment and retail/sold equipment to comply with Health and Safety at Height Laws (HSE) and IRATA.</li>
                  <li>Managed marketing campaigns, budgets and production of digital and printed media.</li>
                  <li>* This role was very wide and varied; I&apos;ve omitted certain roles and responsibilities for sake of keeping my CV relevant to the industry. But I&apos;m more willing to provide a full description of my duties on request.</li>
                </ul>
              </div>
              <div id="job-10" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Travelling
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    July 2009 ➞ April 2009
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium"></span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Travelled around various countries in Europe for four months.</li>
                </ul>
              </div>
              <div id="job-11" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Perforce Software Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    April 2009 ➞ March 2008
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Support Engineer</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Operated within a global team that supported the client/server application to development teams of all sizes. From 1 to 10,000 users from national to international companies and government agencies, often working under strict NDA agreements.</li>
                  <li>Specialized in Operating System integration (mainly Linux) though external tools such as log rotate, backup manager, p4ctl and monitoring through custom Perl scripts and RRDtool.</li>
                  <li>Specialized in remote access such as VPN, SSH set-ups and best practices for customers need to comply with specific regulations and accounting I.e. Sarbanes-Oxley, military export laws</li>
                  <li>Advised customers on performance tuning and best practice set-ups and configuration. Supported integrations, branch, merge and release cycles for small and simple developments to the large and complex</li>
                </ul>
              </div>
              <div id="job-12" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    City Central Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    February 2008 ➞ December 2007
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Contracted IT Consultant</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Upgraded server hardware to single Quad Processor HP ML350 with a RAID5 configuration and LTO3 backup tape drive.</li>
                  <li>Migrated Windows 2000 to Windows 2k3, Active Directory, Users & Data.</li>
                  <li>Upgraded all software - Office XP to 2k3, Sage 50 v10 to v12, Industry package CleanLink, setup and integrated with Windows CE PDAs and synced with outsourced MS Exchange.</li>
                  <li>Implemented a Backup and DR strategy + server monitoring and reporting, centralized AV - Upgraded all workstations to Windows XP from Windows 2000.</li>
                  <li>Upgraded Switching and Routing fabric + Implemented VPN</li>
                  <li>Equipment and cabinet clean, Wire tidy/colour coding, UPS testing + set-up. - Migrated Email from MDaemon mail server to MS Exchange.</li>
                </ul>
              </div>
              <div id="job-13" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Reporo Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    December 2007 ➞ February 2007
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Infrastructure, Support & Test Engineer</span>
                </p>
                <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Reporo provides off portal mobile social networking services to in house brands (Reporo.com & Mwah.com) and third parties like MyMobileLife (Carphone Warehouse)</li>
                  <li>QA / Testing on Java enabled handsets and emulators</li>
                  <li>Bug Tracking, Reporting & Management via Mantis Bug Tracker</li>
                  <li>Installation, Maintenance and Monitoring of production and development environments ensuring PCI (Payment Card Industry) compliance.</li>
                  <li>Fully supported application stack built on Apache 1.3, Java, Perl, PHP and MySQL and Linux (Debian Etch)</li>
                  <li>Fully administered Linux iptables firewalls and Checkpoint firewall. Managing and implementing NAT, Policy Rules, routing tables.</li>
                  <li>Implemented Performance, configuration and security monitoring through the open source HyperIC Monitoring platform and an Office VPN solution (OpenVPN)</li>
                  <li>Designed and Implemented PHP based CMS for internal use to allow publishing of copy and images, which used patterns like MVC and some AJAX</li>
                  <li>Managed Office Move and Interior refit with builders and installed new CAT5 cabling and Data Cabinet Refits</li>
                </ul>
              </div>
              <div id="job-14" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Dow Jones Newswires
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    November 2006 ➞ August 2006
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Systems Support Analyst</span>
                </p>
                <ul className="short list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Provided 1st Line Telephone support for EMEA, Asia and Africa</li>
                </ul>
                <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>Experience in corporate methods and formal processes.</li>
                  <li>Provided 1st Line Telephone support for EMEA, Asia and Africa</li>
                  <li>All tasks and responsibilities undertaken followed highly detailed protocol for logging and reporting all projects and faults</li>
                  <li>Precision time management with regular reports to management - Use of Remedy Fault Ticketing System.</li>
                  <li>Support of Internal Bespoke Application as well as standard MS Office Packages</li>
                  <li>Supported all workstation hardware and software – Apple, Dell Hardware – OSX and Windows XP Operating Systems (Some Solaris on Sun Hardware)</li>
                  <li>Supported All Mac OSX users in the UK, with 3rd line support provided from the US</li>
                </ul>
              </div>
              <div id="job-15" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    PaceFix Ltd
                    <span className="text-gray-600 dark:text-gray-400 text-sm mx-0.5">*</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    August 2006 ➞ August 2005
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Director</span>
                </p>
                <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>More information available on request.</li>
                </ul>
              </div>
              <div id="job-16" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Institute of Education, UCL, EPPE Project
                    <span className="text-gray-600 dark:text-gray-400 text-sm mx-0.5">*</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    August 2005 ➞ June 2005
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Temporary Data Entry Role</span>
                </p>
                <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>More information available on request.</li>
                </ul>
              </div>
              <div id="job-17" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Think Computers Ltd
                    <span className="text-gray-600 dark:text-gray-400 text-sm mx-0.5">*</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    August 2005 ➞ February 2004
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Contracted IT Support Engineer</span>
                </p>
                <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>More information available on request.</li>
                </ul>
              </div>
              <div id="job-18" className="text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    London Borough of Southwark
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-light">
                    September 2003 ➞ July 2002
                  </p>
                </div>
                <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
                  <span className="font-medium">Field IT Support Engineer</span>
                </p>
                <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
                  <li>More information available on request.</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center">* Positions held during university studies</p>
        </div>
      </div>




    </main >

  );
}
