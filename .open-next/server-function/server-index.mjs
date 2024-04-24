export const handler = async (event, context) => {

if (event.rawPath) {
  const routeData = [{"regex":"^/_not\\-found(?:/)?$","logGroupPath":"/788bf135/_not-found"},{"regex":"^/about_us(?:/)?$","logGroupPath":"/cb38af0f/about_us"},{"regex":"^/anynomous_employer(?:/)?$","logGroupPath":"/2ec04ae5/anynomous_employer"},{"regex":"^/contact_us(?:/)?$","logGroupPath":"/904d9df9/contact_us"},{"regex":"^/detail/([^/]+?)(?:/)?$","logGroupPath":"/29abd597/detail/jobDetail"},{"regex":"^/edit_employer(?:/)?$","logGroupPath":"/b1644735/edit_employer"},{"regex":"^/employer_profile(?:/)?$","logGroupPath":"/8959e3b0/employer_profile"},{"regex":"^/emplyer_sign_up(?:/)?$","logGroupPath":"/c41d7e4a/emplyer_sign_up"},{"regex":"^/favicon\\.ico(?:/)?$","logGroupPath":"/b1803648/favicon.ico"},{"regex":"^/favorite(?:/)?$","logGroupPath":"/745cc065/favorite"},{"regex":"^/forgot_password(?:/)?$","logGroupPath":"/47876842/forgot_password"},{"regex":"^/home(?:/)?$","logGroupPath":"/2cc974af/home"},{"regex":"^/join(?:/)?$","logGroupPath":"/e3afbf58/join"},{"regex":"^/login(?:/)?$","logGroupPath":"/7e93fba0/login"},{"regex":"^/post_job(?:/)?$","logGroupPath":"/94c3c428/post_job"},{"regex":"^/reset_password(?:/)?$","logGroupPath":"/8a4008c0/reset_password"},{"regex":"^/seeker_profile(?:/)?$","logGroupPath":"/07110fb0/seeker_profile"},{"regex":"^/seeker_sign_up(?:/)?$","logGroupPath":"/e0ec2077/seeker_sign_up"}].find(({ regex, prefix }) => {
    if (regex) return event.rawPath.match(new RegExp(regex));
    if (prefix) return event.rawPath === prefix || (event.rawPath === prefix + "/");
    return false;
  });
  if (routeData) {
    console.log("::sst::" + JSON.stringify({
      action:"log.split",
      properties: {
        logGroupName:"/sst/lambda/" + context.functionName + routeData.logGroupPath,
      },
    }));
  }
}
  const { handler: rawHandler} = await import("./index.mjs");
  return rawHandler(event, context);
};