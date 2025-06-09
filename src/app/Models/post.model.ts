export interface Post{
    id:string;
    title:string;
    description:string;
    likes:number;
    commentCount:number;
    comments:Comment[];
    creatorId:Profile;
    time:Date;
    communityId:Community;
}
export interface Comment{
    id:string;
    comment:string;
    userId:string
}
interface Profile{
    id:string;
    profileUrl:string;
    name:string;
}
interface Community{
    id:string;
    name:string;
}