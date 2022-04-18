import React from "react";

export default function CodeofConduct() {
  return (
    <div className="p-10 md:p-40 text-black space-y-3">
      <h1 className="text-3xl font-bold">Code of Conduct</h1>
      <p>
        Adapted from the{" "}
        <a
          className="text-white"
          href="https://github.com/cncf/foundation/blob/main/code-of-conduct.md"
        >
          CNCF Community Code of Conduct
        </a>
      </p>
      <p>
        As contributors and maintainers in the CNCF community, and in the
        interest of fostering an open and welcoming community, we pledge to
        respect all people who contribute through reporting issues, posting
        feature requests, updating documentation, submitting pull requests or
        patches, and other activities.
      </p>
      <p>
        We are committed to making participation in the CNCF community a
        harassment-free experience for everyone, regardless of level of
        experience, gender, gender identity and expression, sexual orientation,
        disability, personal appearance, body size, race, ethnicity, age,
        religion, or nationality.
      </p>

      <h2 className="text-xl font-bold">Scope </h2>

      <p>
        This code of conduct applies both within project spaces and in public
        spaces when an individual is representing the project or its community.
      </p>

      <h3 className="text-lg font-bold">CNCF Events</h3>

      <p>
        CNCF events, or events run by the Linux Foundation with professional
        events staff, are governed by the Linux Foundation{" "}
        <a
          className="text-white"
          href="https://events.linuxfoundation.org/code-of-conduct/"
        >
          Events Code of Conduct
        </a>{" "}
        available on the event page. This is designed to be used iconjunction
        with the CNCF Code of Conduct.
      </p>

      <h2 className="text-xl font-bold">Our Standards</h2>

      <p className="text-slate-700 p-2">
        Examples of behavior that contributes to a positive environment include:
      </p>

      <li>Demonstrating empathy and kindness toward other people</li>
      <li>
        Being respectful of differing opinions, viewpoints, and experiences
      </li>
      <li>Giving and gracefully accepting constructive feedback</li>
      <li>
        Accepting responsibility and apologizing to those affected by our
        mistakes, and learning from the experience
      </li>
      <li>
        Focusing on what is best not just for us as individuals, but for the
        overall community
      </li>

      <p className="text-slate-700 p-2">
        Examples of unacceptable behavior include:
      </p>

      <li>
        The use of sexualized language or imagery, and sexual attention or
        advances of any kind
      </li>
      <li>
        Trolling, insulting or derogatory comments, and personal or political
        attacks
      </li>
      <li>Public or private harassment</li>
      <li>
        Publishing others' private information, such as a physical or email
        address, without their explicit permission
      </li>
      <li>
        Other conduct which could reasonably be considered inappropriate in a
        professional setting
      </li>

      <p>
        Project maintainers have the right and responsibility to remove, edit,
        or reject comments, commits, code, wiki edits, issues, and other
        contributions that are not aligned to this Code of Conduct. By adopting
        this Code of Conduct, project maintainers commit themselves to fairly
        and consistently applying these principles to every aspect of managing
        this project. Project maintainers who do not follow or enforce the Code
        of Conduct may be permanently removed from the project team.
      </p>

      <h2 className="text-xl font-bold">Reporting </h2>

      <p>
        For incidents occuring in the Kubernetes community, contact the{" "}
        <a
          className="text-white"
          href="https://git.k8s.io/community/committee-code-of-conduct"
        >
          Kubernetes Code of Conduct Committee
        </a>
        .
      </p>

      <p>
        Regarding this project, please contact the project authors via Slack.
      </p>
    </div>
  );
}
