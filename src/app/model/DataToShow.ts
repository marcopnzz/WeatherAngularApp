export class DataToShow {
    private country: string
    private cityname: string
    private imgId: string
    private temps: number[]//[Temperatura,MAX,MIN]
    private description: string
    private lon: number
    private lat: number
    private url: string

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }


    public getLon(): number {
        return this.lon;
    }

    public setLon(lon: number): void {
        this.lon = lon;
    }

    public getLat(): number {
        return this.lat;
    }

    public setLat(lat: number): void {
        this.lat = lat;
    }


    public getCountry(): string {
        return this.country;
    }

    public setCountry(country: string): void {
        this.country = country;
    }

    public getCityname(): string {
        return this.cityname;
    }

    public setCityname(cityname: string): void {
        this.cityname = cityname;
    }

    public getImgId(): string {
        return this.imgId;
    }

    public setImgId(imgId: string): void {
        this.imgId = imgId;
    }

    public getTemps(): number[] {
        return this.temps;
    }

    public setTemps(temps) {
        this.temps = temps;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }





}