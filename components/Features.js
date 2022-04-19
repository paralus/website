import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-sky-100 py-12" id="features">
      <div className="px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row pt-20 items-center lg:justify-center">
          <div className="space-y-6 text-sky-900 featureTextWrapper pb-5 lg:pb-0">
            <h2 className="text-4xl font-semibold text-center lg:text-left">
              Free, Open Source platform to manage access to every Kubernetes
              cluster
            </h2>
            <p className="text-base font-light text-center lg:text-left">
              Easily generate, manage and revoke kubeconfig for resources on single or multi cloud environments.
              Configure access to all your clusters, wherever they are, all from one place.
            </p>
            <ul
              role="list"
              className="text-base font-semibold marker:text-sky-400 list-disc pl-5 gap-2"
            >
              <li>
                Use OIDC to configure organization and user level settings with
                inheritance
              </li>
              <li>Integrate SSO and RBAC to control access to resources</li>
              <li>Create custom roles and permissions</li>
              <li>Manage cluster level settings</li>
            </ul>
          </div>
          <Image
            src="/images/home.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row-reverse pt-40 items-center lg:justify-center">
          <div className="space-y-6 text-sky-900 featureTextWrapper pb-5 lg:pb-0">
            <h2 className="text-4xl font-semibold text-center lg:text-left">
              Zero-trust security by default
            </h2>
            <p className="text-base font-light text-center lg:text-left">
              ZTKA uses zero-trust security principles to provide a way to
              access clusters via{" "}
              <code className="text-green-600 font-light mx-1">kubectl</code>
              commands
            </p>
            <ul
              role="list"
              className="text-base font-semibold marker:text-sky-400 list-disc pl-5 gap-2"
            >
              <li>Dynamically revoke permissions based on user access</li>
              <li>Configure time-based authentication</li>
              <li>
                Control{" "}
                <code className="text-green-600 font-light mx-1">kubectl</code>{" "}
                access via pre-configured roles
              </li>
              <li>Protect your Kubernetes resources from bad actors</li>
            </ul>
          </div>
          <Image
            src="/images/project-permission.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row pt-40 items-center lg:justify-center">
          <div className="space-y-6 text-sky-900 featureTextWrapper pb-5 lg:pb-0">
            <h2 className="text-4xl font-semibold text-center lg:text-left">
              Real-time Audit Logs
            </h2>
            <p className="text-base font-light text-center lg:text-left">
              Keep a track of all the activities performed and resources accessed by a user. These real time and historical logs come handy
              for auditing and governance purposes.
            </p>
            <ul
              role="list"
              className="text-base font-semibold marker:text-sky-400 list-disc pl-5 gap-2"
            >
              <li>See who accessed which Kubernetes resources when</li>
              <li>View cluster resource access and activity history</li>
              <li>
                Filter activity by name, date, cluster, namespace, and methods
                used to access the resources
              </li>
            </ul>
          </div>
          <Image
            src="/images/audit-log-2.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row-reverse pt-40 items-center lg:justify-center">
          <div className="space-y-6 text-sky-900 featureTextWrapper pb-5 lg:pb-0">
            <h2 className="text-4xl font-semibold text-center lg:text-left">
              Use the Dashboard or CLI
            </h2>
            <p className="text-base font-light text-center lg:text-left">
              Whether you prefer an elaborate GUI or using your machine’s
              terminal, ZTKA ships with several interaction options. In short,
              you can use ZTKA via GUI or CLI
            </p>
            <ul
              role="list"
              className="text-base font-semibold marker:text-sky-400 list-disc pl-5 gap-2"
            >
              <li>
                Install ZTKA in your cluster using Helm, and access it through a
                web GUI or web CLI console
              </li>
              <li>Use ZTKA via the REST API</li>
              <li>
                Or use <code className="text-green-600 font-light">rctl</code>{" "}
                to manage kubeconfig files directly from your local terminal
              </li>
            </ul>
          </div>
          <Image
            src="/images/ui-5.png"
            alt="home screen"
            height={450}
            width={650}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
