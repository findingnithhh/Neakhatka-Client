import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

import { HostedZone } from "aws-cdk-lib/aws-route53";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";

const ROOT_DOMAIN_NAME = "neakhatka.com"; // Your domain name here
const DOMAIN_NAME = `${ROOT_DOMAIN_NAME}`; // Any prefix you want, or just the root domain

export default {
  config(_input) { 
    return {
      name: "neakhatka-app",
      region: "us-east-1", // Keep it that way
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

      // Add the hosted zone and the certificate to the Next.js site
      const site = new NextjsSite(stack, "NextJS", {
        customDomain: {
          domainName: DOMAIN_NAME,
          domainAlias: `www.${DOMAIN_NAME}`,
          cdk: {
            hostedZone,
            certificate,
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
        domainName: DOMAIN_NAME,
      });
    });
  },
} satisfies SSTConfig;
