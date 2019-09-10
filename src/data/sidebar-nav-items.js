export default function() {
  return [
    {
      title: "Overview",
      to: "/overview",
      htmlBefore: '<i class="material-icons">bar_chart</i>',
      htmlAfter: ""
    },
    {
      title: "Feeds",
      to: "/feeds",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      htmlAfter: ""
    },

    {
      title: "Sources",
      to: "/sources",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      htmlAfter: ""
    },
    {
      title: "Feed Preview",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/feeds-preview",
    },

    {
      title: "",
      to: "/",
      htmlBefore: '',
      htmlAfter: ""
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
/*
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
*/

  ];
}
