module.exports = class Faktur {
    constructor(KD_JENIS_TRANSAKSI, FG_PENGGANTI, NOMOR_FAKTUR, MASA_PAJAK, TAHUN_PAJAK, TANGGAL_FAKTUR, NPWP) {
        this.id = 'id_1';
        this.KD_JENIS_TRANSAKSI = KD_JENIS_TRANSAKSI;
        this.FG_PENGGANTI = FG_PENGGANTI;
        this.NOMOR_FAKTUR = NOMOR_FAKTUR;
        this.MASA_PAJAK = MASA_PAJAK;
        this.TAHUN_PAJAK = TAHUN_PAJAK;
        this.TANGGAL_FAKTUR = TANGGAL_FAKTUR;
        this.NPWP = NPWP;
    }
    get NOMOR_FAKTUR() {
        return this._NOMOR_FAKTUR;
    }
    get NPWP() {
        return this._NPWP;
    }

    get KD_JENIS_TRANSAKSI() {
        return this._KD_JENIS_TRANSAKSI;
    }
    get FG_PENGGANTI() {
        return this._FG_PENGGANTI;
    }
    get MASA_PAJAK() {
        return this._MASA_PAJAK;
    }
    get TAHUN_PAJAK() {
        return this._TAHUN_PAJAK;
    }
    get TANGGAL_FAKTUR() {
        return this._TANGGAL_FAKTUR;
    }

    set KD_JENIS_TRANSAKSI(data) {
        this._KD_JENIS_TRANSAKSI = data
    }
    set FG_PENGGANTI(data) {
        this._FG_PENGGANTI = data
    }
    set NOMOR_FAKTUR(data) {
        this._NOMOR_FAKTUR = data
    }
    set MASA_PAJAK(data) {
        this._MASA_PAJAK = data
    }
    set TAHUN_PAJAK(data) {
        this._TAHUN_PAJAK = data
    }
    set TANGGAL_FAKTUR(data) {
        this._TANGGAL_FAKTUR = data
    }
    set NPWP(data) {
        this._NPWP = data
    }

    getFaktur() {
        console.log('Faktur: ' + this.NOMOR_FAKTUR + ', NPWP: ' + this.NPWP + ', MASA: ' + this.MASA_PAJAK);
    }
}
