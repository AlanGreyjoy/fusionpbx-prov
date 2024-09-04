# FusionPBX-PROV - FusionPBX Provisioning

## 🔔🔔🔔🔔 IMPORTANT 🔔🔔🔔🔔

FusionPBX-PROV is not affiliated in anyway with the fantastic FusionPBX project and it's team members. This is a custom fork.

This project is to purely highjack the provisioning system of FusionPBX and make it compatible with other systems.

There is no support for this project and there are no modifications to and part of the core PBX system. The core PBX system will not be used in this project.

### Where is the meat?

---

The meat of this project addition is in ./api. This API server is an Express/Node.js server. It uses Sequelize ORM to interact with the database. The database is a PostgreSQL database. The database schema is in ./api/models. The database schema is a direct copy of the FusionPBX database schema. The database schema is not modified in any way.

### What will this project NOT do?

---

This project will focus exclusively on the provisioning system of FusionPBX. This project WILL NOT add any additional API features that majorly conflict with Mark Cranes paid services. ie: REST API module. **So don't ask.**

### Support?

---

None.

### Why no support?

---

Because.

### What if I want **\_** endpoint added?

---

No.

### Can you add an endpoint to [blah blah blah]?

---

No.

### Why did you fork FusionPBX and not just create a separate project/microservice?

Well, we _may_ need to modify one core area of FusionPBX. This would be ./apps/provision directory. I don't think we will need too though. We will see.

It also makes it easier to integrate with FusionPBX and it's insane nginx configuration.

### How do I install and use this?

---

- Install node.js directly on a fusionpbx server.
- Update nginx to proxy to the node.js server. Default port is 6066 😈
- Clone only the ./api directory.
- Run `npm install` in the ./api directory.

### Regen the database schema

---

The project uses sequelize-auto to generate the database schema.

- In ./api/index.js, change `const syncDb = false;` to `const syncDb = true;`
- Restart server
- Stop server
- Change `const syncDb = true;` back to `const syncDb = false;`
- Restart server

### PM2

---

This project uses PM2 to manage the node.js server. You can install PM2 by running `npm install pm2 -g`. You can start the server by running `pm2 start ./api/index.js`. You can stop the server by running `pm2 stop fusionpbx-prov`. You can restart the server by running `pm2 restart fusionpbx-prov`.

### Endpoints

---

Base URL: https://localhost:6066/autop/rest

#### Devices - Only one example. You can find all routes in ./api/routes/index.js

- GET /devices
- GET /devices/:deviceUuid
- POST /devices
- PUT /devices/:deviceUuid

### How does this work with other systems?

Simple. If you're writing a front end, add an area to "Enable Auto Provisioning". This has an endpoint that will create the domain, if not created and then create settings accordingly. The settings are stored in the database and can be retrieved by the device. It's up to you on how you translate the id of the tenant/domain in your current system with the domain_uuid in the FusionPBX database.

example:

- Check if the domain exists in FusionPBX. If not, create it. (/domains/:domainUuid)
- Check if auto provisioning is enabled. If not, enable it. (/domains/:domainUuid/auto-provision-enabled)
- Enable auto provisioning. (/domains/:domainUuid/enable-auto-provision)
- Disable auto provisioning. (/domains/:domainUuid/disable-auto-provision)

Then, you can create a device.

Well what about provisioning creds? Easy. Add that to the /devices PUT request. This schema can be found in ./api/models/VDeviceLines.js :)

## Anyone with a basic understanding of RESTful API's and Node.js can easily integrate this into their system.

---

---

## What is [FusionPBX](https://www.fusionpbx.com/)?

FusionPBX is an open source FreeSWITCH GUI. It is a web interface that simplifies the configuration and management of FreeSWITCH. It is a multi-tenant, capable of handling thousands of tenants and millions of users.

You can find the source code for FusionPBX [here](https://github.com/fusionpbx/fusionpbx)
