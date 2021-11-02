

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
    tracks: Song[];
}

//入驻歌手
export type Singer = {
    id: number;
    name: string;
    picUrl: string;
    musicSize?: number;
}

//歌曲
export type Song = {
    id: number;
    name: string;
    url: string;
    ar: Singer[]; //歌手 数组
    al:{
        id: number;
        name: string;
        picUrl: string;
    } //专辑信息 数组
    dt: number;
}

//歌曲播放地址
export type SongUrl = {
    id: number;
    url: string;
}