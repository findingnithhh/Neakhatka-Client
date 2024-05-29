  export interface DetailCard{
    description: string | number | readonly string[] | undefined
    address: string | number | readonly string[] | undefined
    totalEmployees: string | number | readonly string[] | undefined
    websiteLink: string | number | readonly string[] | undefined
    contactPerson: string | number | readonly string[] | undefined
    contactPhone: string | number | readonly string[] | undefined
    contactEmail: string | number | readonly string[] | undefined
    id:string,
    companyName?:string,
    companyLogo:string,
    peopleAmount:string
    jobTitle:string,
    salary:string,
    Emploment:string
    location:string,
    DeadLine:string,    
}