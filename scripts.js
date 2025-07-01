$(document).ready(function () {
  const orgData = JSON.parse($("#org-data").text());

  console.log(orgData.OrganizationId);
  console.log(orgData.DeveloperName);
  console.log(orgData.Url);
});
