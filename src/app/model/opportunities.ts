export class Opportunities {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public applicationCloseDate?: Date,
    public earliest_start_date?: Date,
    public latestEndDate?: Date,
    public backgrounds?: any,
    public skils?: any,
    public selectionProcess?: string,
    public salary?: string,
    public location?: string
  ) {}
}
