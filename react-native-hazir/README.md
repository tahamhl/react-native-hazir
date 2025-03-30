# Expo React Native Template

Bu proje, React Native ve Expo kullanılarak oluşturulmuş bir mobil uygulama şablonudur. Hızlı geliştirme ve prototipleme için gerekli temel yapıları içermektedir.

## Özellikler

- **Kimlik Doğrulama**: Kullanıcı giriş, kayıt ve oturum yönetimi
- **Navigasyon**: React Navigation ile sayfa geçişleri
- **Context API**: Global state yönetimi
- **Tema Desteği**: Kolay özelleştirilebilir UI bileşenleri
- **Responsive Tasarım**: Farklı ekranlara uyumlu kullanıcı arayüzü

## Başlangıç

### Gereksinimler

- Node.js (>= 14)
- npm veya yarn
- Expo CLI
- Android Studio (Android geliştirme için)
- Xcode (iOS geliştirme için, sadece macOS)

### Kurulum

1. Projeyi klonlayın:
   ```
   git clone https://github.com/kullaniciadi/expo-react-native-template.git
   cd expo-react-native-template
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   # veya
   yarn install
   ```

3. Uygulamayı başlatın:
   ```
   npm start
   # veya
   yarn start
   ```

## Proje Yapısı

```
expo-react-native-template/
├── src/
│   ├── components/      # Yeniden kullanılabilir UI bileşenleri
│   ├── context/         # React Context API ile durum yönetimi
│   ├── navigation/      # React Navigation yapılandırması
│   ├── screens/         # Uygulama ekranları
│   │   ├── auth/        # Kimlik doğrulama ekranları (giriş, kayıt)
│   │   └── main/        # Ana uygulama ekranları
│   ├── reducers/        # Durum yönetimi için reducer'lar
│   └── utils/           # Yardımcı fonksiyonlar ve sabitler
├── assets/              # Görsel ve font dosyaları
├── App.js               # Uygulama kök bileşeni
└── app.json             # Expo yapılandırması
```

## Özelleştirme

### Tema

Uygulama temasını özelleştirmek için ekran bileşenlerindeki stil objelerini değiştirebilirsiniz.

### Navigasyon

Yeni ekranlar eklemek için:

1. `src/screens` klasöründe ekran bileşeninizi oluşturun
2. `src/navigation/AppNavigator.js` dosyasında Stack Navigator'a ekranınızı ekleyin

### Kimlik Doğrulama

Gerçek bir backend ile kimlik doğrulama yapmak için:

1. `src/context/AuthContext.js` dosyasını düzenleyin
2. API istekleri için axios veya fetch kullanarak servislerinizi entegre edin

## Derleme ve Yayınlama

### Android APK/AAB Oluşturma

```
npm run build:android
# veya
yarn build:android
```

### iOS IPA Oluşturma

```
npm run build:ios
# veya
yarn build:ios
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakın. 