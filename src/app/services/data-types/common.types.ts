

export type Banner = {
    imageUrl: string,
    targetId: number,
    url: string,
    
}


export type HotTag = {
    id: number,
    name: string,
    position: number,
    
}

//歌单
export type SongSheet = {
    id: number;
    name: string;
    playCount: number;
    picUrl: string;
}