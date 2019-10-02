module.exports = class ObjekFaktur {
    constructor(KODE_OBJEK,NAMA,HARGA_SATUAN,JUMLAH_BARANG,HARGA_TOTAL,DISKON,DPP,PPN,TARIF_PPNBM,PPNBM) {
      this.id = 'id_1';
      this.KODE_OBJEK = KODE_OBJEK;
      this.NAMA = NAMA;
      this.HARGA_SATUAN = HARGA_SATUAN;
      this.JUMLAH_BARANG = JUMLAH_BARANG;
      this.HARGA_TOTAL = HARGA_TOTAL;
      this.DISKON = DISKON;
      this.DPP = DPP;
      this.PPN = PPN;
      this.TARIF_PPNBM = TARIF_PPNBM;
      this.PPNBM  = PPNBM ;
    }

    get KODE_OBJEK () {
        return this._KODE_OBJEK;
    }
    get NAMA () {
        return this._NAMA;
    }
    get HARGA_SATUAN () {
        return this._HARGA_SATUAN;
    }
    get JUMLAH_BARANG () {
        return this._JUMLAH_BARANG;
    }
    get HARGA_TOTAL () {
        return this._HARGA_TOTAL;
    }
    get DISKON () {
        return this._DISKON;
    }
    get DPP () {
        return this._DPP
    }
    get PPN () {
        return this._PPN
    }
    get TARIF_PPNBM () {
        return this._TARIF_PPNBM
    }
    get PPNBM () {
        return this._PPNBM
    }

    

    set KODE_OBJEK (data) {
        this._KODE_OBJEK = data;
    }
    set NAMA (data) {
        this._NAMA = data;
    }
    set HARGA_SATUAN (data) {
        this._HARGA_SATUAN = data;
    }
    set JUMLAH_BARANG (data) {
        this._JUMLAH_BARANG = data;
    }
    set HARGA_TOTAL (data) {
        this._HARGA_TOTAL = data;
    }
    set DISKON (data) {
        this._DISKON = data;
    }
    set DPP (data) {
        this._DPP = data;
    }
    set PPN (data) {
        this._PPN = data;
    }
    set TARIF_PPNBM (data) {
        this._TARIF_PPNBM = data;
    }
    set PPNBM (data) {
        this._PPNBM = data;
    }
  
    getOf() {
      console.log('Kode ' + this.KODE_OBJEK + ', NAMA: ' + this.NAMA + ', Harga: ' + this.HARGA_TOTAL);
    }
  }
  