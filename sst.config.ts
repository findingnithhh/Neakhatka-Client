import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

import { HostedZone } from "aws-cdk-lib/aws-route53";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";


const ROOT_DOMAIN_NAME = "neakhatka.com "; // Your domain name here
const DOMAIN_NAME = `nextjs.${ROOT_DOMAIN_NAME}`;

export default {
  config(_input) {
    return {
      name: "neakhatka",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {

      // Look up hosted zone
      const hostedZone = HostedZone.fromLookup(stack, "HostedZone", {
        domainName: ROOT_DOMAIN_NAME,
      });

       // Create a SSL certificate linked to the hosted zone
       const certificate = new Certificate(stack, "Certificate", {
        domainName: DOMAIN_NAME,
        subjectAlternativeNames: [`www.${DOMAIN_NAME}`],
        validation: CertificateValidation.fromDns(hostedZone),
      });

      const site = new NextjsSite(stack, "NextJS",{
        customDomain: {
          domainName: DOMAIN_NAME,
          domainAlias: `www.${DOMAIN_NAME}`,
          cdk: {
            hostedZone,
            certificate,
          }
        }

      });

      // const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
