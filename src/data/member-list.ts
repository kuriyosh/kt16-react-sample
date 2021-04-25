export type MemberList = {
  name: string;
  job: "engineer" | "docter";
  family: Array<string>;
  fat?: boolean;
};

export const memberList: Array<MemberList> = [
  {
    name: "yoshiki",
    job: "engineer",
    family: [],
  },
  {
    name: "jukiya",
    job: "engineer",
    family: ["asukyan"],
  },
  {
    name: "masaki",
    job: "docter",
    family: [],
    fat: true,
  },
];
