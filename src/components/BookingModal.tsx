
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, MapPin, User, Phone, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const BookingModal = ({ isOpen, onClose, selectedService, therapists }) => {
  const [bookingData, setBookingData] = useState({
    service: selectedService?.name || '',
    therapist: '',
    date: '',
    time: '',
    duration: selectedService?.duration || '',
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!bookingData.name || !bookingData.phone || !bookingData.address || 
        !bookingData.date || !bookingData.time || !bookingData.therapist) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    // Simulate booking submission
    toast.success('Pemesanan berhasil! Kami akan menghubungi Anda dalam 15 menit untuk konfirmasi.');
    console.log('Booking data:', bookingData);
    
    // Reset form and close modal
    setBookingData({
      service: '',
      therapist: '',
      date: '',
      time: '',
      duration: '',
      name: '',
      phone: '',
      address: '',
      notes: ''
    });
    onClose();
  };

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Update service when selectedService changes
  if (selectedService && bookingData.service !== selectedService.name) {
    setBookingData(prev => ({
      ...prev,
      service: selectedService.name,
      duration: selectedService.duration
    }));
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl text-emerald-600">
            <Calendar className="w-6 h-6 mr-2" />
            Pesan Layanan Pijat
          </DialogTitle>
          <DialogDescription>
            Lengkapi form di bawah untuk memesan layanan pijat profesional di rumah Anda
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="service">Layanan *</Label>
              <Input
                id="service"
                value={bookingData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                placeholder="Pilih layanan"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="duration">Durasi</Label>
              <Input
                id="duration"
                value={bookingData.duration}
                readOnly
                className="mt-1 bg-gray-50"
              />
            </div>
          </div>

          {/* Therapist Selection */}
          <div>
            <Label htmlFor="therapist">Pilih Terapis *</Label>
            <Select value={bookingData.therapist} onValueChange={(value) => handleInputChange('therapist', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Pilih terapis yang Anda inginkan" />
              </SelectTrigger>
              <SelectContent>
                {therapists.map((therapist) => (
                  <SelectItem key={therapist.id} value={therapist.name}>
                    <div className="flex items-center">
                      <span className="mr-2">{therapist.image}</span>
                      <div>
                        <div className="font-medium">{therapist.name}</div>
                        <div className="text-xs text-gray-500">{therapist.experience} • ⭐ {therapist.rating}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Tanggal *</Label>
              <Input
                id="date"
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="time">Waktu *</Label>
              <Select value={bookingData.time} onValueChange={(value) => handleInputChange('time', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Pilih waktu" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nama Lengkap *</Label>
              <Input
                id="name"
                value={bookingData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Nomor Telepon *</Label>
              <Input
                id="phone"
                value={bookingData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="mt-1"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address">Alamat Lengkap *</Label>
            <Textarea
              id="address"
              value={bookingData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Masukkan alamat lengkap termasuk nomor rumah, RT/RW, kelurahan, kecamatan"
              className="mt-1 min-h-[80px]"
            />
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes">Catatan Tambahan</Label>
            <Textarea
              id="notes"
              value={bookingData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Catatan khusus atau permintaan tambahan (opsional)"
              className="mt-1"
            />
          </div>

          {/* Summary */}
          {selectedService && (
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-emerald-800 mb-2">Ringkasan Pemesanan</h3>
              <div className="space-y-1 text-sm text-emerald-700">
                <div>Layanan: {selectedService.name}</div>
                <div>Durasi: {selectedService.duration}</div>
                <div>Harga: {selectedService.price}</div>
                {bookingData.therapist && <div>Terapis: {bookingData.therapist}</div>}
                {bookingData.date && bookingData.time && (
                  <div>Jadwal: {new Date(bookingData.date).toLocaleDateString('id-ID')} pukul {bookingData.time}</div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Batal
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konfirmasi Pemesanan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
