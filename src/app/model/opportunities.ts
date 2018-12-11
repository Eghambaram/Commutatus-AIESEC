export class Opportunities {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public applications_close_date?: Date,
    public earliest_start_date?: Date,
    public latest_end_date?: Date,
    public backgrounds?: any,
    public skils?: any,
    public selectionProcess?: string,
    public salary?: string,
    public location?: string
  ) {}
}
