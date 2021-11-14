import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const KategoriSurat = React.lazy(() => import('./views/pages/KategoriSurat'));
const SifatSurat = React.lazy(() => import('./views/pages/SifatSurat'));
const KlasifikasiSurat = React.lazy(() => import('./views/pages/KlasifikasiSurat'));
const StatusSurat = React.lazy(() => import('./views/pages/StatusSurat'));
const TindakanDisposisi = React.lazy(() => import('./views/pages/TindakanDisposisi'));
const KlasifikasiDisposisi = React.lazy(() => import('./views/pages/KlasifikasiDisposisi'));
const DataPegawai = React.lazy(() => import('./views/pages/DataPegawai'));
const FormDataPegawai = React.lazy(()=> import('./views/pages/DataPegawai/FormDataPegawai'));
const DetailsPegawai = React.lazy(()=> import('./views/pages/DataPegawai/Details'));
const DataInstansi = React.lazy(()=> import('./views/pages/DataInstansi'));
const FormDataInstansi = React.lazy(()=> import('./views/pages/DataInstansi/FormDataInstansi'));
const DataUnitKerja = React.lazy(()=> import('./views/pages/DataUnitKerja/index'));
const FormDataUnitKerja = React.lazy(()=> import('./views/pages/DataUnitKerja/FormUnitKerja'));
const DataUser = React.lazy(()=> import('./views/pages/User'));
const DataRole = React.lazy(()=> import('./views/pages/DataRole'));
const DataJabatan = React.lazy(()=> import('./views/pages/DataJabatan'));
const MappingUnitKerja = React.lazy(()=> import('./views/pages/MappingUnitKerja'));
const AturJabatan = React.lazy(()=> import('./views/pages/MappingUnitKerja/AturJabatan'))
const BuatSurat = React.lazy(()=> import('./views/pages/BuatSurat'))
const SuratMasuk = React.lazy(()=> import('./views/pages/SuratMasuk'))
const Surat = React.lazy(()=> import('./views/pages/Surat')) 
const SuratKeluar = React.lazy(()=> import('./views/pages/SuratKeluar'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: DataUser },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/kategori-surat', exact: true, name: 'Kategori Surat', component: KategoriSurat },
  { path: '/sifat-surat', exact: true, name: 'Sifat Surat', component: SifatSurat },
  { path: '/klasifikasi-surat', exact: true, name: 'Klasifikasi Surat', component: KlasifikasiSurat },
  { path: '/status-surat', exact: true, name: 'Status Surat', component: StatusSurat },
  { path: '/tindakan-disposisi', exact: true, name: 'Tindakan Disposisi', component: TindakanDisposisi },
  { path: '/klasifikasi-disposisi', exact: true, name: 'Klasifikasi Disposisi', component: KlasifikasiDisposisi },
  { path: '/data-pegawai', exact: true, name: 'Data Pegawai', component: DataPegawai },
  { path: '/data-pegawai/tambah', exact: true, name: 'Tambah Data Pegawai', component: FormDataPegawai },
  { path: '/data-pegawai/update/:id', exact: true, name: 'Update Data Pegawai', component: ()=> <FormDataPegawai isUpdate={true} /> },
  { path: '/data-pegawai/:id', exact: true, name: 'Detail Pegawai', component: DetailsPegawai },
  { path: '/instansi', exact: true, name: 'Instansi', component: DataInstansi },
  { path: '/instansi/tambah', exact: true, name: 'Instansi', component: FormDataInstansi },
  { path: '/instansi/:id', exact: true, name: 'Instansi', component: () => <FormDataInstansi isUpdate={true} /> },
  { path: '/unit-kerja', exact: true, name: 'Instansi', component: DataUnitKerja },
  { path: '/unit-kerja/tambah', exact: true, name: 'Instansi', component: FormDataUnitKerja},
  { path: '/unit-kerja/update/:id', exact: true, name: 'Instansi', component: () => <FormDataUnitKerja isUpdate={true} /> },
  { path: '/role', exact: true, name: 'Data Role', component: DataRole },
  { path: '/jabatan', exact: true, name: 'Data Jabatan', component: DataJabatan },
  { path: '/mapping-unit-kerja', exact: true, name: 'Mapping Unit Kerja', component: MappingUnitKerja },
  { path: '/mapping-unit-kerja/:id', exact: true, name: 'Mapping Unit Kerja', component: AturJabatan },
  { path: '/surat/buat', exact: true, name: 'Buat Surat', component: BuatSurat },
  { path: '/surat-masuk', exact: true, name: 'Surat Masuk', component: SuratMasuk },
  { path: '/surat-keluar', exact: true, name: 'Surat Masuk', component: SuratKeluar },
  { path: '/surat/:id', exact: true, name: 'Data Surat', component: Surat },

];

export default routes;
