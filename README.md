<img src="https://raw.githubusercontent.com/wiki/obsidiandynamics/kafdrop/images/kafdrop-logo.png" width="90px" alt="logo"/> Kafdrop – Kafka Web UI &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fobsidiandynamics%2Fkafdrop&text=Get%20Kafdrop%20%E2%80%94%20a%20web-based%20UI%20for%20viewing%20%23ApacheKafka%20topics%20and%20browsing%20consumers%20)
===

[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/obsidiandynamics/kafdrop/blob/master/LICENSE)
[![Release with mvn](https://github.com/obsidiandynamics/kafdrop/actions/workflows/master.yml/badge.svg)](https://github.com/obsidiandynamics/kafdrop/actions/workflows/master.yml)
[![Docker](https://img.shields.io/docker/pulls/obsidiandynamics/kafdrop.svg)](https://hub.docker.com/r/obsidiandynamics/kafdrop)
[![Language grade: Java](https://img.shields.io/lgtm/grade/java/g/obsidiandynamics/kafdrop.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/obsidiandynamics/kafdrop/context:java)


<em>Kafdrop is a web UI for viewing Kafka topics and browsing consumer groups.</em> The tool displays information such as brokers, topics, partitions, consumers, and lets you view messages. 

![Overview Screenshot](docs/images/overview.png?raw=true)

This project is a reboot of Kafdrop 2.x, dragged kicking and screaming into the world of JDK 11+, Kafka 2.x, Helm and Kubernetes. It's a lightweight application that runs on Spring Boot and is dead-easy to configure, supporting SASL and TLS-secured brokers.

# Features
* **View Kafka brokers** — topic and partition assignments, and controller status
* **View topics** — partition count, replication status, and custom configuration
* **Browse messages** — JSON, plain text, Avro and Protobuf encoding
* **View consumer groups** — per-partition parked offsets, combined and per-partition lag
* **Create new topics**
* **View ACLs**
* **Support for Azure Event Hubs**

# Getting Started
## Kafka:
Executar docker-compose up na pasta /docker-compose/kafka-kafdrop/ para iniciar o Kafka.
É possível entrar no localhost:9000 para ver a UI do Kafka com todos os tópicos e dados sendo transmitidos.
