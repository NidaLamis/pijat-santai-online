
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Star, User, Phone, MessageCircle } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import TherapistCard from '@/components/TherapistCard';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: "Traditional Indonesian Massage",
      duration: "60 menit",
      price: "Rp 150.000",
      category: "Traditional",
      description: "Pijat tradisional Indonesia dengan teknik turun temurun",
      image: "🇮🇩",
      benefits: ["Melancarkan peredaran darah", "Mengurangi stress", "Relaksasi otot"]
    },
    {
      id: 2,
      name: "Swedish Massage",
      duration: "90 menit", 
      price: "Rp 200.000",
      category: "Therapeutic",
      description: "Pijat terapeutik untuk mengatasi ketegangan otot",
      image: "💆‍♀️",
      benefits: ["Mengurangi nyeri otot", "Meningkatkan fleksibilitas", "Detoksifikasi"]
    },
    {
      id: 3,
      name: "Hot Stone Massage",
      duration: "75 menit",
      price: "Rp 250.000", 
      category: "Relaxation",
      description: "Pijat dengan batu panas untuk relaksasi mendalam",
      image: "🔥",
      benefits: ["Deep relaxation", "Melancarkan sirkulasi", "Menghilangkan toksin"]
    },
    {
      id: 4,
      name: "Aromatherapy Massage",
      duration: "60 menit",
      price: "Rp 180.000",
      category: "Relaxation", 
      description: "Pijat dengan essential oil untuk ketenangan jiwa",
      image: "🌸",
      benefits: ["Menenangkan pikiran", "Meningkatkan mood", "Relaksasi total"]
    }
  ];

  const therapists = [
    {
      id: 1,
      name: "Sari Dewi",
      experience: "8 tahun",
      rating: 4.9,
      specialties: ["Traditional", "Therapeutic"],
      image: "👩‍⚕️",
      reviews: 156,
      certified: true
    },
    {
      id: 2,
      name: "Bambang Wijaya", 
      experience: "12 tahun",
      rating: 4.8,
      specialties: ["Swedish", "Deep Tissue"],
      image: "👨‍⚕️",
      reviews: 203,
      certified: true
    },
    {
      id: 3,
      name: "Maya Sari",
      experience: "6 tahun", 
      rating: 4.9,
      specialties: ["Aromatherapy", "Hot Stone"],
      image: "👩‍⚕️",
      reviews: 89,
      certified: true
    }
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">💆‍♀️</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MassageKu
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
              <User className="w-4 h-4 mr-2" />
              Masuk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Relaksasi di Rumah Anda
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nikmati layanan pijat profesional berkualitas tinggi dengan terapis bersertifikat. 
              Pesan sekarang dan rasakan pengalaman spa premium di kenyamanan rumah Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Pesan Sekarang
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">5000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-600">Terapis Bersertifikat</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">4.9</div>
              <div className="text-gray-600">Rating Rata-rata</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Layanan Tersedia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Layanan Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan lengkap layanan pijat dengan berbagai teknik untuk kebutuhan relaksasi Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onBook={() => handleBookService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Terapis Profesional
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim terapis bersertifikat dengan pengalaman bertahun-tahun untuk memberikan pelayanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Siap Merasakan Relaksasi?</h3>
          <p className="text-xl mb-8 opacity-90">
            Pesan layanan pijat sekarang dan nikmati pengalaman spa premium di rumah Anda
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => setIsBookingOpen(true)}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Pesan Sekarang
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">💆‍♀️</div>
                <h4 className="text-xl font-bold">MassageKu</h4>
              </div>
              <p className="text-gray-400">
                Layanan pijat profesional terpercaya untuk relaksasi dan kesehatan Anda.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Pijat Tradisional</li>
                <li>Pijat Terapeutik</li>
                <li>Aromatherapy</li>
                <li>Hot Stone</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontak</h5>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +62 811-1234-5678</li>
                <li>📧 info@massageku.com</li>
                <li>📍 Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Jam Operasional</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Jumat: 08:00 - 22:00</li>
                <li>Sabtu - Minggu: 08:00 - 24:00</li>
                <li>Layanan 24/7 tersedia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MassageKu. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        therapists={therapists}
      />
    </div>
  );
};

export default Index;
