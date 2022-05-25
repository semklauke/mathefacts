export interface Episode {
    nr: number,
    name: string,
    link: string,
    embed: string,
    date: string,
    timestamp: number
}
export interface Fact {
  title: string,
  desc: string,
  tags: string[],
  nr: number,
  slug: string,
  img?: string,
  episode: Episode
}