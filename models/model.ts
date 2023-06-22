interface Picture {
  large: string;
  medium: string;
  small: string;
  original: string;
}

interface PersonUtils {
  id: number;
  picture?: Picture;
  name: string;
  position: string;
}

export interface PartnerModel {
  id: number;
  name: string;
  picture: Picture;
}

export interface MultimediaModel {
  id: number;
  youtube_link: string;
  picture: Picture;
}

export interface BannerModel {
  id: number;
  name: string;
  link: string;
  picture: Picture;
}

export interface ProgramModel {
  id: number;
  name: string;
  location?: string;
  location_url?: string;
  date_in: string;
  date_out: string;
}

export interface IResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PersonSpeaker extends PersonUtils {}

export interface PersonModerator extends PersonUtils {}

export interface NewsModel {
  id: number;
  title: string;
  description: string;
  brief: string;
  picture: Picture;
  created_at: string;
}
