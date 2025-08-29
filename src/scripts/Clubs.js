// Simulating dynamic tab data (can come from DB or API later)
export function getTabData(tabNumber) {
  const data = {
    1: {
      title: "Department Clubs",
      description: "Here all the Department Clubs will be shown!"
    },
    2: {
      title: "GENERAL CLUBS",
      description: "Here all the General Clubs will be shown that are  non department owned !"
    },
    3: {
      title: "OTHER CLUBS",
      description: "Here all other Clubs will be shown!"
    }
  };

  return data[tabNumber] || { title: "Not Found", description: "No content" };
}
