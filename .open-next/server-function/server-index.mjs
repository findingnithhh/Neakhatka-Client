export const handler = async (event, context) => {

if (event.rawPath) {
  const routeData = [{"regex":"^/(?:/)?$","logGroupPath":"/8a5edab2/"},{"regex":"^/_not\\-found(?:/)?$","logGroupPath":"/788bf135/_not-found"},{"regex":"^/about_us(?:/)?$","logGroupPath":"/cb38af0f/about_us"},{"regex":"^/contact_us(?:/)?$","logGroupPath":"/904d9df9/contact_us"},{"regex":"^/dashboard(?:/)?$","logGroupPath":"/89347bb2/dashboard"},{"regex":"^/dashboard/candidates(?:/)?$","logGroupPath":"/6928a177/dashboard/candidates"},{"regex":"^/dashboard/candidates\\-table(?:/)?$","logGroupPath":"/9538db16/dashboard/candidates-table"},{"regex":"^/dashboard/candidates/detail/([^/]+?)(?:/)?$","logGroupPath":"/8357c2ce/dashboard/candidates/detail/detail"},{"regex":"^/dashboard/edit_employer(?:/)?$","logGroupPath":"/b17d6193/dashboard/edit_employer"},{"regex":"^/dashboard/edit_post(?:/)?$","logGroupPath":"/83fc81bd/dashboard/edit_post"},{"regex":"^/dashboard/post(?:/)?$","logGroupPath":"/bcc36170/dashboard/post"},{"regex":"^/dashboard/post/detail/([^/]+?)(?:/)?$","logGroupPath":"/c4b76e44/dashboard/post/detail/post_detail"},{"regex":"^/dashboard/profile(?:/)?$","logGroupPath":"/2e40d2e5/dashboard/profile"},{"regex":"^/detail/([^/]+?)(?:/)?$","logGroupPath":"/29abd597/detail/jobDetail"},{"regex":"^/edit_employer(?:/)?$","logGroupPath":"/b1644735/edit_employer"},{"regex":"^/employer_profile(?:/)?$","logGroupPath":"/8959e3b0/employer_profile"},{"regex":"^/emplyer_sign_up(?:/)?$","logGroupPath":"/c41d7e4a/emplyer_sign_up"},{"regex":"^/favicon\\.ico(?:/)?$","logGroupPath":"/b1803648/favicon.ico"},{"regex":"^/favorite(?:/)?$","logGroupPath":"/745cc065/favorite"},{"regex":"^/forgot_password(?:/)?$","logGroupPath":"/47876842/forgot_password"},{"regex":"^/join(?:/)?$","logGroupPath":"/e3afbf58/join"},{"regex":"^/login(?:/)?$","logGroupPath":"/7e93fba0/login"},{"regex":"^/please\\-verify(?:/)?$","logGroupPath":"/7d9cc929/please-verify"},{"regex":"^/post_job(?:/)?$","logGroupPath":"/94c3c428/post_job"},{"regex":"^/reset_password(?:/)?$","logGroupPath":"/8a4008c0/reset_password"},{"regex":"^/seeker_profile(?:/)?$","logGroupPath":"/07110fb0/seeker_profile"},{"regex":"^/seeker_sign_up(?:/)?$","logGroupPath":"/e0ec2077/seeker_sign_up"},{"regex":"^/SignupSuccess(?:/)?$","logGroupPath":"/445b8add/SignupSuccess"}].find(({ regex, prefix }) => {
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