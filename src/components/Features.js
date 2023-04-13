import React from "react";
import Feature from "./Feature";

export default function Features() {
  return (
    <div className="px-10 pt-5">
      <div className="flex flex-col gap-y-6">
        <div className="text-4xl md:text-5xl text-black font-semibold text-center flex items-center justify-center">
          Features
        </div>
        <div className="space-y-20 lg:space-y-30 py-20" id="features">
          <Feature
            reverse={true}
            title="One place to manage all Kubernetes access"
            description="Generate, maintain, and revoke access configurations across clusters, projects, namespaces, etc."
            image="authorization.svg"
            bullets={[
              "Keep your existing SSO or RBAC solution",
              "Create permissions with sensible defaults and powerful customization",
              "Manage resources from cluster-level to user-level",
            ]}
          />
          <Feature
            title="Zero-trust security by default"
            description="Paralus applies zero-trust security principles to secure Kubernetes"
            image="new-role.svg"
            bullets={[
              "Keep your existing kubectl scripts and workflows",
              "Control access with pre-configured roles",
              "Dynamically revoke or change permissions and their duration",
            ]}
          />
          <Feature
            reverse={true}
            title="Batteries-included auditing tools"
            description="Automatic detailed logging of activities and resource access. Useful for both real-time and historical tracking"
            image="audit-logs.svg"
            bullets={[
              "Quickly answer questions about who accessed what",
              "View cluster-level history",
              "Leverage Kubernetes-aware filtering by cluster, namespace, access method, etc.",
            ]}
          />
          <Feature
            title="Access through the web or CLI"
            image="terminal.svg"
            description="Paralus can be installed using Helm, and ships with a browser-based GUI as well as traditional command-line tooling"
            bullets={[
              "pctl tool to manage kubeconfigs directly from terminal",
              "Well-documented REST API",
              "A modern web interface",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
