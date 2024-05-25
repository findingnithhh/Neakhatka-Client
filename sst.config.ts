import { HostedZone } from "aws-cdk-lib/aws-route53";
import { SSTConfig } from "sst";
import { Bucket, NextjsSite } from "sst/constructs";

import * as cdk from "aws-cdk-lib";

const ROOT_DOMAIN_NAME = "neakhatka.com";
const DOMAIN_NAME = "neakhatka.com";

export default {
  config(_input) {
    return {
      name: `neakhatka`,
      region: "us-east-1",
    };
  },
  stacks(app) {
    // A STACK DEPLOY NEXTJS TO AWS
    app.stack(function Site({ stack }) {
      // LOOK UP HOSTED ZONE
      const hostedZone = HostedZone.fromLookup(stack, "HostedZone", {
        domainName: ROOT_DOMAIN_NAME,
      });
      console.log(stack.stage, hostedZone);
      // CREATE A SSL CERTIFICATE LINKED TO THE HOSTED ZONE
      const certificate = new cdk.aws_certificatemanager.Certificate(
        stack,
        "Certificate",
        {
          domainName:
            stack.stage === "prod"
              ? DOMAIN_NAME
              : `${stack.stage}.${DOMAIN_NAME}`,
          validation:
            cdk.aws_certificatemanager.CertificateValidation.fromDns(
              hostedZone
            ),
        }
      );

      // SPECIFY THE NAME OF BUCKET
      const bucket = new Bucket(stack, "public", {
        cdk: {
          bucket: {
            bucketName:
              stack.stage === "dev"
                ? "neakhatka-website"
                : `${stack.stage}-neakhatka-website`,
          },
        },
      });

      // NEXTJS SITE
      const site = new NextjsSite(stack, "site", {
        bind: [bucket],
        customDomain: {
          domainName:
            stack.stage === "prod"
              ? DOMAIN_NAME
              : `${stack.stage}.${DOMAIN_NAME}`,
          domainAlias:
            stack.stage === "prod"
              ? `www.${DOMAIN_NAME}`
              : `www.${stack.stage}.${DOMAIN_NAME}`,
          cdk: {
            hostedZone,
            certificate,
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
