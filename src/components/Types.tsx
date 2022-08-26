export interface Event {
  readonly items: {
    _id: string,
    title: string,
    flyerFront: string,
    attending: number,
    date: string,
    startTime: string,
    endTime: string,
    contentUrl: string,
    readonly venue: {
      id: string,
      name: string,
      contentUrl: string,
      live: boolean,
      direction: string,
    }
    readonly pick: {
      id: string,
      blurb: string,
    }
    readonly artists: [
      {
        id: string,
        name: string,
        _id: {
          $oid: string,
        }
      }
    ]
  }
}