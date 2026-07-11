import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, InputHTMLAttributes, ReactNode, SVGProps, TextareaHTMLAttributes } from 'react';
import SideDrawer from '@/components/ui/SideDrawer';
import { useTranslation } from 'react-i18next';

type UploadDrawerProps = {
  open: boolean;
  onClose: () => void;
};

type UploadedPhoto = {
  id: string;
  url: string;
  name: string;
};

type FloatingFieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

type SelectOption = {
  value: string;
  label: string;
};

const fieldClassName =
  'min-h-12 w-full rounded-full border border-[#EAE1D8] bg-white px-5 pt-1 text-lg font-normal text-brown outline-none transition placeholder:text-brown/35 focus:border-gold';

const FloatingField = ({ label, children, className = '' }: FloatingFieldProps) => (
  <div className={`relative block text-base font-extrabold text-brown ${className}`}>
    <span className="absolute -top-3 left-4 z-10 bg-white px-1.5 leading-5 text-brown/85">{label}</span>
    {children}
  </div>
);

const getInputPlaceholder = (label: string) => `Masukkan ${label.replace('*', '').trim().toLowerCase()}`;

const IconTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.75 5.25H14.25M7.5 8.25V12.75M10.5 8.25V12.75M4.875 5.25L5.625 15H12.375L13.125 5.25M7.125 5.25L7.5 3H10.5L10.875 5.25"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconImageUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 5.75C5 5.33579 5.33579 5 5.75 5H18.25C18.6642 5 19 5.33579 19 5.75V18.25C19 18.6642 18.6642 19 18.25 19H5.75C5.33579 19 5 18.6642 5 18.25V5.75Z"
      fill="currentColor"
    />
    <path d="M7.25 16.25L10.15 12.65L12.35 15.25L13.75 13.55L16.75 16.25H7.25Z" fill="white" />
    <path
      d="M14.75 10.25C15.4404 10.25 16 9.69036 16 9C16 8.30964 15.4404 7.75 14.75 7.75C14.0596 7.75 13.5 8.30964 13.5 9C13.5 9.69036 14.0596 10.25 14.75 10.25Z"
      fill="white"
    />
  </svg>
);

const UploadBox = ({
  label,
  multiple = false,
  onChange,
}: {
  label: string;
  multiple?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <label className="grid aspect-square cursor-pointer place-items-center rounded-xl border border-dashed border-[#EAE1D8] bg-white text-center text-lg font-medium text-brown transition hover:border-gold hover:text-gold">
    <span className="grid gap-1">
      <IconImageUpload className="mx-auto h-6 w-6 text-brown/85" aria-hidden="true" />
      {label}
    </span>
    <input type="file" accept="image/png,image/jpeg" multiple={multiple} className="sr-only" onChange={onChange} />
  </label>
);

const PhotoPreview = ({ photo, label, onRemove }: { photo: UploadedPhoto; label: string; onRemove: () => void }) => (
  <div className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-cream-soft">
    <img src={photo.url} alt={label} className="h-full w-full object-cover" />
    <button
      type="button"
      onClick={onRemove}
      className="absolute bottom-1.5 right-1.5 grid h-8 w-8 place-items-center rounded-lg bg-white text-coral shadow-card transition hover:bg-coral hover:text-white"
      aria-label={`Hapus ${photo.name}`}
    >
      <IconTrash className="h-4 w-4" aria-hidden="true" />
    </button>
  </div>
);

const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => <input {...props} className={fieldClassName} />;

const IconChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomSelect = ({
  value,
  options,
  onChange,
}: {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-[#EAE1D8] bg-white px-5 pr-6 pt-1 text-left text-lg font-normal outline-none transition hover:border-gold focus:border-gold ${
          selectedOption ? 'text-brown' : 'text-brown/35'
        }`}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="min-w-0 truncate">{selectedOption?.label ?? '-- Pilih --'}</span>
        <IconChevronDown
          className={`h-5 w-5 shrink-0 text-brown transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 overflow-hidden rounded-3xl border border-[#EAE1D8] bg-white p-1.5 shadow-[0_18px_45px_rgba(69,52,33,0.16)]">
          <div className="max-h-56 overflow-y-auto">
            {options.map((option) => {
              const active = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  className={`flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                    active ? 'bg-cream text-gold' : 'text-brown/80 hover:bg-cream-soft hover:text-brown'
                  }`}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={active}
                >
                  <span className="min-w-0 truncate">{option.label}</span>
                  {active && <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const TextareaInput = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className="w-full resize-none rounded-[28px] border border-[#EAE1D8] bg-white px-5 py-5 text-lg font-normal leading-7 text-brown outline-none transition placeholder:text-brown/35 focus:border-gold"
  />
);

const UploadDrawer = ({ open, onClose }: UploadDrawerProps) => {
  const { t } = useTranslation(['upload', 'common']);
  const [itemPhotos, setItemPhotos] = useState<UploadedPhoto[]>([]);
  const [proofPhotos, setProofPhotos] = useState<UploadedPhoto[]>([]);
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [branded, setBranded] = useState('');
  const [condition, setCondition] = useState('');
  const itemPhotosRef = useRef<UploadedPhoto[]>([]);
  const proofPhotosRef = useRef<UploadedPhoto[]>([]);

  const genderOptions = [
    { value: 'unisex', label: t('upload:options.unisex') },
    { value: 'men', label: t('upload:options.men') },
    { value: 'women', label: t('upload:options.women') },
  ];
  const categoryOptions = [
    { value: 'outer', label: t('upload:options.outer') },
    { value: 'top', label: t('upload:options.top') },
    { value: 'bottom', label: t('upload:options.bottom') },
    { value: 'dress', label: t('upload:options.dress') },
  ];
  const brandedOptions = [
    { value: 'no', label: t('upload:options.notBranded') },
    { value: 'yes', label: t('upload:options.branded') },
  ];
  const conditionOptions = [
    { value: 'good', label: t('upload:options.good') },
    { value: 'veryGood', label: t('upload:options.veryGood') },
    { value: 'wearable', label: t('upload:options.wearable') },
  ];

  useEffect(() => {
    itemPhotosRef.current = itemPhotos;
  }, [itemPhotos]);

  useEffect(() => {
    proofPhotosRef.current = proofPhotos;
  }, [proofPhotos]);

  useEffect(() => {
    if (branded === 'yes') return;

    setProofPhotos((photos) => {
      photos.forEach((photo) => URL.revokeObjectURL(photo.url));
      return [];
    });
  }, [branded]);

  useEffect(
    () => () => {
      itemPhotosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url));
      proofPhotosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url));
    },
    [],
  );

  const createPhotos = (files: FileList) =>
    Array.from(files).map((file) => ({
      id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
      url: URL.createObjectURL(file),
      name: file.name,
    }));

  const handleItemPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    setItemPhotos((photos) => [...photos, ...createPhotos(event.target.files as FileList)]);
    event.target.value = '';
  };

  const handleProofPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    setProofPhotos((photos) => [...photos, ...createPhotos(event.target.files as FileList)]);
    event.target.value = '';
  };

  const removeItemPhoto = (id: string) => {
    setItemPhotos((photos) => {
      const photo = photos.find((item) => item.id === id);
      if (photo) URL.revokeObjectURL(photo.url);
      return photos.filter((item) => item.id !== id);
    });
  };

  const removeProofPhoto = (id: string) => {
    setProofPhotos((photos) => {
      const photo = photos.find((item) => item.id === id);
      if (photo) URL.revokeObjectURL(photo.url);
      return photos.filter((item) => item.id !== id);
    });
  };

  return (
    <SideDrawer open={open} onClose={onClose} title={t('upload:title')} closeLabel={t('common:actions.close')}>
      <div className="px-6 pb-4 pt-12 pr-20 sm:px-8 sm:pr-20">
        <h2 className="font-display text-[32px] font-normal leading-tight text-brown">{t('upload:title')}</h2>
        <p className="mt-4 max-w-155 text-base leading-8 text-brown/70">{t('upload:description')}</p>
      </div>

      <form className="flex min-h-0 flex-1 flex-col" onSubmit={(event) => event.preventDefault()}>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 sm:px-8">
          <section className="pt-8">
            <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FloatingField label={t('upload:fields.name')}>
                  <TextInput placeholder={getInputPlaceholder(t('upload:fields.name'))} required />
                </FloatingField>
                <p className="mt-1.5 pl-5 text-sm text-brown/35">{t('upload:fields.nameHelp')}</p>
              </div>
              <FloatingField label={t('upload:fields.gender')} className="sm:col-span-2">
                <CustomSelect value={gender} options={genderOptions} onChange={setGender} />
              </FloatingField>
              <FloatingField label={t('upload:fields.category')}>
                <CustomSelect value={category} options={categoryOptions} onChange={setCategory} />
              </FloatingField>
              <FloatingField label={t('upload:fields.branded')}>
                <CustomSelect value={branded} options={brandedOptions} onChange={setBranded} />
              </FloatingField>
              {branded === 'yes' && (
                <FloatingField label={t('upload:fields.brand')} className="sm:col-span-2">
                  <TextInput placeholder={getInputPlaceholder(t('upload:fields.brand'))} required />
                </FloatingField>
              )}
              <div>
                <FloatingField label={t('upload:fields.size')}>
                  <TextInput placeholder={getInputPlaceholder(t('upload:fields.size'))} required />
                </FloatingField>
                <p className="mt-1.5 pl-5 text-sm text-brown/35">{t('upload:fields.sizeHelp')}</p>
              </div>
              <FloatingField label={t('upload:fields.condition')}>
                <CustomSelect value={condition} options={conditionOptions} onChange={setCondition} />
              </FloatingField>
              <FloatingField label={t('upload:fields.description')} className="sm:col-span-2">
                <TextareaInput placeholder={getInputPlaceholder(t('upload:fields.description'))} required rows={4} />
                <p className="mt-1.5 pl-5 text-sm font-normal text-brown/35">{t('upload:fields.descriptionHelp')}</p>
              </FloatingField>
            </div>
          </section>

          <section className="pt-12">
            <div className="grid gap-10">
              <div>
                <h3 className="text-lg font-extrabold text-brown">{t('upload:fields.itemPhotos')}</h3>
                <p className="mt-0.5 max-w-lg text-base leading-5 text-brown/40">{t('upload:fields.photoHelp')}</p>
                <div className="mt-4 grid max-w-[350px] grid-cols-3 gap-3">
                  <UploadBox label={t('common:actions.browse')} multiple onChange={handleItemPhotoChange} />
                  {itemPhotos.map((photo) => (
                    <PhotoPreview
                      key={photo.id}
                      photo={photo}
                      label={t('upload:preview')}
                      onRemove={() => removeItemPhoto(photo.id)}
                    />
                  ))}
                </div>
              </div>
              {branded === 'yes' && (
                <div>
                  <h3 className="text-lg font-extrabold text-brown">{t('upload:fields.proof')}</h3>
                  <p className="mt-0.5 max-w-lg text-base leading-5 text-brown/40">{t('upload:fields.proofHelp')}</p>
                  <div className="mt-4 grid max-w-[110px] grid-cols-1 gap-3">
                    <UploadBox label={t('common:actions.browse')} multiple onChange={handleProofPhotoChange} />
                    {proofPhotos.map((photo) => (
                      <PhotoPreview
                        key={photo.id}
                        photo={photo}
                        label={t('upload:preview')}
                        onRemove={() => removeProofPhoto(photo.id)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="pt-12">
            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-extrabold text-brown">{t('upload:fields.preloved')}</h3>
                <p className="mt-1 text-base leading-5 text-brown/40">{t('upload:fields.prelovedHelp')}</p>
              </div>
              <FloatingField label={t('upload:fields.price')}>
                <TextInput inputMode="numeric" placeholder={getInputPlaceholder(t('upload:fields.price'))} required />
              </FloatingField>
            </div>
          </section>
        </div>

        <div className="flex gap-4 bg-white px-6 py-8 sm:justify-end sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="min-h-14 flex-1 rounded-full border border-gold px-10 text-xl font-bold text-gold sm:flex-none"
          >
            {t('common:actions.cancel')}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="min-h-14 flex-[1.4] rounded-full bg-brown px-12 text-xl font-bold text-white sm:flex-none"
          >
            {t('upload:eyebrow')}
          </button>
        </div>
      </form>
    </SideDrawer>
  );
};

export default UploadDrawer;
