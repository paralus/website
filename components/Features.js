import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <div className="py-12" id="features">
      <div>
        <div className="flex flex-col items-center pt-20 lg:flex-row lg:justify-center lg:gap-10">
          <div className="space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:w-1/2 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Manage access to all your clusters from one centralized, free, platform
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              Generate, maintain, and revoke kubeconfigs across any number of environments with one
              tool
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>Keep your existing SSO or RBAC solution</li>
              <li>Create permissions with sensible defaults and powerful customization</li>
              <li>Manage resources from cluster-level to user-level</li>
            </ul>
          </div>
          <Image
            src="/static/images/ztka-screens.png"
            alt="home screen"
            height={400}
            width={600}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center pt-40 lg:flex-row-reverse lg:justify-center lg:gap-10">
          <div className="space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:w-1/2 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Zero-trust security by default
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              ZTKA applies zero-trust security principles to secure Kubernetes access through
              <code className="mx-1 font-light text-yellow-600">kubectl</code>
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>
                Keep your <code className="mx-1 font-light text-yellow-600">kubectl</code> scripts
                and workflows
              </li>
              <li>Control access with pre-configured roles</li>
              <li>Dynamically change permissions and their duration</li>
            </ul>
          </div>
          <Image
            src="/static/images/ztka-screens.png"
            alt="home screen"
            height={400}
            width={600}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center pt-40 lg:flex-row lg:justify-center lg:gap-10">
          <div className="space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:w-1/2 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Batteries-included auditing tools
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              Automatic detailed logging of activities and resource access. Useful for both
              real-time and historical tracking
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>
                Quickly answer queries about <span className="italic">who</span> did{' '}
                <span className="italic">what</span>
              </li>
              <li>View cluster-level history</li>
              <li>
                Leverage Kubernetes-aware filtering by cluster, namespace, access method, etc.
              </li>
            </ul>
          </div>
          <Image
            src="/static/images/ztka-screens.png"
            alt="home screen"
            height={400}
            width={600}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center pt-40 lg:flex-row-reverse lg:justify-center lg:gap-10">
          <div className="space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:w-1/2 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Access through the web or CLI
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              ZTKA can be installed using Helm, and ships with a browser-based GUI as well as
              traditional command-line tooling
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>
                <code className="mx-1 font-light text-yellow-600">rctl</code> tool to manage
                kubeconfigs directly from terminal
              </li>
              <li>Well-documented REST API</li>
              <li>A modern web interface</li>
            </ul>
          </div>
          <Image
            src="/static/images/ztka-screens.png"
            alt="home screen"
            height={400}
            width={600}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}
