---
title: "Miscellaneous Components"
description: "Miscellaneous components of Paralus architecture"
slug: /architecture/miscellaneous-components
---
These are the miscellaneous components of Paralus that are required for proper functioning of Paralus. All of these components interact with Paralus to bring in additional functionality.

- [PostgreSQL DB](#postgresql-db)
- [Elastic Search](#elastic-search)
- [Filebeat](#filebeat)
- [Fluentbit](#fluentbit)
- [Contour](#contour)

## PostgreSQL DB

PostgreSQL is an open source object-relational database system. Paralus uses PostgreSQL as its core datastore that stores all Paralus configurations, settings and data. Paralus creates all the necessary tables during initialization. Kratos-automigrate also sets up all db objects that are required by kratos.

## Elastic Search

Elastic search is an open source distributed, search and analytics engine for various types of data. Paralus uses elastic search to store all the system and kubectl logs that are generate. These logs persist in the database even after the pod is killed or restarts.

> Note: This is now an optional component from release 0.1.9.

## Filebeat

Filebeat is a lightweight tool that collects all the logs from various components of Paralus. It is used to collect the logs from Paralus components and forwards it to to elasticsearch server.

> Note: This is now an optional component from release 0.1.9.

## Fluentbit

Fluent Bit is a scalable, lightweight logs collecting, processing and forwarding tool. It is used to collect the activity logs for audit log in Paralus and forward that to the PostgreSQL database.

> Note: This is required only when PostgreSQL database is used.

## Contour

Contour is an open source Kubernetes ingress controller that provides a control plane for the Envoy edge and service proxy. It is used as Nginx replacement as Paralus makes use of domain based routing.
