import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <div className="py-12" id="features">
      <div className="px-10 lg:px-20">
        <div className="flex flex-col items-center pt-20 lg:flex-row lg:justify-center">
          <div className="featureTextWrapper space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Free, Open Source platform to manage access to every Kubernetes cluster
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              Easily generate, manage and revoke kubeconfig for different clusters and people, for
              single and multi cloud environments. Whatever and wherever clusters you have,
              configure access to them all in one place
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>Use OIDC to configure organization and user level settings with inheritance</li>
              <li>Integrate SSO and RBAC to control access to resources</li>
              <li>Create custom roles and permissions</li>
              <li>Manage cluster level settings</li>
            </ul>
          </div>
          <Image
            src="/static/images/home.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center pt-40 lg:flex-row-reverse lg:justify-center">
          <div className="featureTextWrapper space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Zero-trust security by default
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              ZTKA uses zero-trust security principles to provide a way to access clusters via{' '}
              <code className="mx-1 font-light text-yellow-600">kubectl</code>
              commands
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>Dynamically revoke permissions based on user access</li>
              <li>Configure time-based authentication</li>
              <li>
                Control <code className="mx-1 font-light text-yellow-600">kubectl</code> access via
                pre-configured user and organization roles
              </li>
              <li>Protect your Kubernetes resources from bad actors</li>
            </ul>
          </div>
          <Image
            src="/static/images/project-permission.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center pt-40 lg:flex-row lg:justify-center">
          <div className="featureTextWrapper space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Real-time Audit Logs
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              View all cluster access activity logs in one place, historically and in real-time
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>See who accessed which Kubernetes resources when</li>
              <li>View cluster resource access and activity history</li>
              <li>
                Filter activity by name, date, cluster, namespace, and methods used to access the
                resources
              </li>
            </ul>
          </div>
          <Image
            src="/static/images/audit-log-2.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center pt-40 lg:flex-row-reverse lg:justify-center">
          <div className="featureTextWrapper space-y-6 pb-5 text-sky-900 dark:text-sky-100 lg:pb-0">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              Multiple interface options
            </h2>
            <p className="text-center text-base font-light lg:text-left">
              Whether you prefer an elaborate GUI or using your machine’s terminal, ZTKA ships with
              several interaction options. In short, ZTKA comes with a UI or no UI
            </p>
            <ul
              role="list"
              className="list-disc gap-2 pl-5 text-base font-semibold marker:text-sky-400"
            >
              <li>
                Install ZTKA in your cluster using Helm, and access it through a web GUI or web CLI
                console
              </li>
              <li>Configure time-based authentication</li>
              <li>Use ZTKA via the REST API</li>
              <li>
                Or use <code className="font-light text-yellow-600">rctl</code> to manage kubeconfig
                files directly in your machine’s terminal
              </li>
            </ul>
          </div>
          <Image
            src="/static/images/ui-5.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}
