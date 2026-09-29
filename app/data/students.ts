export interface Student {
  id: number;
  name: string;
  major: string;
  imageUrl: string;
}

export const studentsData: Student[] = [
  {
    id: 1,
    name: "Briney Stilinovich",
    major: "Biology",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgPO6ueGVgCdH9m2cHuDcdkC82jbGsRYCw3XqBcMvzw&s=10"
  },
  {
    id: 2,
    name: "Garrett Stilinovich",
    major: "Aerospace Engineering",
    imageUrl: "https://www.ncsasports.org/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Frms-rmfiles-production%2Fclient_photos%2Fathlete_17027530_profile.jpg&w=384&q=75"
  }
];