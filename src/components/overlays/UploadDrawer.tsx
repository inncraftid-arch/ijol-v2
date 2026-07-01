import { useState } from 'react';
import { IconUpload } from '@/assets/icons/navbar';
import { assets } from '@/constants/assets';
import { cn } from '@/lib/cn';
import SideDrawer from './SideDrawer';

type UploadDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const steps = ['Detail Item', 'Foto Item', 'Penjualan'] as const;

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="grid gap-2 text-sm font-bold text-brown">{children}</label>
);

const UploadBox = ({ label }: { label: string }) => (
  <label className="grid aspect-square cursor-pointer place-items-center rounded-lg border border-dashed border-brown/25 bg-cream-soft text-center text-xs font-bold text-brown transition hover:border-gold hover:text-gold">
    <span className="grid gap-2">
      <IconUpload className="mx-auto h-5 w-5" aria-hidden="true" />
      {label}
    </span>
    <input type="file" accept="image/png,image/jpeg" className="sr-only" />
  </label>
);

const UploadDrawer = ({ open, onClose }: UploadDrawerProps) => {
  const [step, setStep] = useState(0);

  const closeDrawer = () => {
    setStep(0);
    onClose();
  };

  return (
    <SideDrawer open={open} onClose={closeDrawer} title="Daftarkan Pakaianmu">
      <div className="border-b border-line px-6 pb-5 pt-7 pr-20 sm:px-8 sm:pr-20">
        <p className="text-xs font-extrabold uppercase text-gold">Upload Pakaian</p>
        <h2 className="mt-2 font-display text-3xl font-normal text-brown">Daftarkan Pakaianmu</h2>
        <p className="mt-2 text-sm leading-6 text-brown/55">Upload baju yang tidak terpakai ke katalog IJOL untuk melalui proses review.</p>
      </div>

      <div className="grid grid-cols-3 border-b border-line bg-cream-soft px-6 sm:px-8">
        {steps.map((label, index) => (
          <div key={label} className={cn('border-b-2 py-4 text-center text-xs font-bold', index === step ? 'border-gold text-gold' : 'border-transparent text-brown/35')}>
            <span className="mr-1.5">{index + 1}.</span>{label}
          </div>
        ))}
      </div>

      <form className="flex min-h-0 flex-1 flex-col" onSubmit={(event) => event.preventDefault()}>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-7 sm:px-8">
          {step === 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FieldLabel>Nama item*<input required defaultValue="Jaket Oversize" className="min-h-12 rounded-xl border border-line px-4 font-normal outline-none focus:border-gold" /></FieldLabel>
                <p className="mt-1.5 text-xs text-brown/35">Contoh: Kemeja flannel kotak-kotak, kaos oversize, atau celana jeans.</p>
              </div>
              <FieldLabel>Kategori*<select defaultValue="outer" className="min-h-12 rounded-xl border border-line bg-white px-4 font-normal outline-none focus:border-gold"><option value="outer">Outer</option><option>Atasan</option><option>Bawahan</option><option>Dress</option></select></FieldLabel>
              <FieldLabel>Apakah item branded?*<select defaultValue="yes" className="min-h-12 rounded-xl border border-line bg-white px-4 font-normal outline-none focus:border-gold"><option value="yes">Ya - branded</option><option value="no">Tidak - non branded</option></select></FieldLabel>
              <div className="sm:col-span-2"><FieldLabel>Brand*<input defaultValue="Zoro" className="min-h-12 rounded-xl border border-line px-4 font-normal outline-none focus:border-gold" /></FieldLabel></div>
              <FieldLabel>Ukuran*<input defaultValue="XL" className="min-h-12 rounded-xl border border-line px-4 font-normal outline-none focus:border-gold" /></FieldLabel>
              <FieldLabel>Kondisi item*<select defaultValue="good" className="min-h-12 rounded-xl border border-line bg-white px-4 font-normal outline-none focus:border-gold"><option value="good">Baik - beberapa kali pakai</option><option>Sangat baik</option><option>Layak pakai</option></select></FieldLabel>
              <div className="sm:col-span-2"><FieldLabel>Deskripsi*<textarea defaultValue="Crop Gaudi warna kombinasi maroon dan cream, kondisi masih bagus dan sudah lama tidak dipakai." rows={4} className="resize-none rounded-xl border border-line p-4 font-normal leading-6 outline-none focus:border-gold" /></FieldLabel></div>
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-8">
              <div>
                <h3 className="font-bold text-brown">Foto Item*</h3>
                <p className="mt-1 text-xs leading-5 text-brown/40">Tambahkan foto tampak depan, belakang, dan detail kondisi.</p>
                <div className="mt-4 grid max-w-md grid-cols-3 gap-3">
                  <UploadBox label="Browse" />
                  {[0, 1].map((item) => <img key={item} src={assets.productItemJacket} alt="Preview pakaian" className="aspect-square w-full rounded-lg object-cover" />)}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-brown">Upload Bukti Keaslian</h3>
                <p className="mt-1 text-xs leading-5 text-brown/40">Foto label, tag, receipt, atau bukti pembelian untuk mempercepat review.</p>
                <div className="mt-4 w-32"><UploadBox label="Browse" /></div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-6">
              <div className="rounded-xl border border-line bg-cream-soft p-5">
                <h3 className="font-bold text-brown">Pre-Loved Item</h3>
                <p className="mt-2 text-sm leading-6 text-brown/55">Aktifkan penjualan apabila kamu ingin item tersedia untuk dibeli selain ditukar.</p>
                <label className="mt-5 flex items-center justify-between gap-4 font-bold text-brown">
                  Tersedia untuk dibeli
                  <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#C99547]" />
                </label>
              </div>
              <FieldLabel>Harga Item (Rp)*<input inputMode="numeric" placeholder="Masukkan harga" defaultValue="45000" className="min-h-12 rounded-xl border border-line px-4 font-normal outline-none focus:border-gold" /></FieldLabel>
              <div className="rounded-xl border border-green/15 bg-green/5 p-5 text-sm leading-6 text-green-deep">Satu pakaian yang masuk membantu menjaga pakaian lain tetap berputar di ekosistem sirkular.</div>
            </div>
          )}
        </div>

        <div className="flex gap-3 border-t border-line bg-white px-6 py-5 sm:justify-end sm:px-8">
          <button type="button" onClick={step === 0 ? closeDrawer : () => setStep((value) => value - 1)} className="min-h-12 flex-1 rounded-full border border-gold px-7 font-bold text-gold sm:flex-none">{step === 0 ? 'Batal' : 'Kembali'}</button>
          <button type="button" onClick={step === steps.length - 1 ? closeDrawer : () => setStep((value) => value + 1)} className="min-h-12 flex-[1.4] rounded-full bg-brown px-8 font-bold text-white sm:flex-none">{step === steps.length - 1 ? 'Upload Pakaian' : 'Lanjut'}</button>
        </div>
      </form>
    </SideDrawer>
  );
};

export default UploadDrawer;
