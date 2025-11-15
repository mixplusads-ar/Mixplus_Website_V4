type HeroMessage = { title: string; subtitle: string };

export const heroMessages: Record<'fa' | 'en', HeroMessage[]> = {
  fa: [
    {
      title: 'میکس‌پلاس؛ قلب آشپزخانه مدرن',
      subtitle: 'سینک، گاز، فر و هود با طراحی الهام‌گرفته از آشپزخانه‌های ایتالیایی.'
    },
    {
      title: 'کیفیت اروپایی، ساخت ایران',
      subtitle:
        'ترکیب قطعات باکیفیت و استانداردهای روز دنیا برای خانه‌های امروز.'
    },
    {
      title: 'جزئیات کوچک، تفاوت‌های بزرگ',
      subtitle:
        'از ضخامت استیل تا نوع شعله، هر جزئیات برای تجربه بهتر شما طراحی شده است.'
    },
    {
      title: 'آشپزخانه‌ای که الهام‌بخش است',
      subtitle:
        'نور، متریال و تکنولوژی کنار هم؛ تا هر روز آشپزی دل‌نشین‌تر شود.'
    },
    {
      title: 'اعتماد نمایندگان، انتخاب خانواده‌ها',
      subtitle:
        'شبکه گسترده نمایندگی‌های مجاز در سراسر کشور کنار شماست.'
    },
    {
      title: 'خدمات پس از فروش واقعی',
      subtitle:
        'از نصب تخصصی تا پیگیری شکایات؛ فرآیندها شفاف و مستندند.'
    },
    {
      title: 'طراحی ایتالیایی، سلیقه ایرانی',
      subtitle:
        'هماهنگ با ترندهای جهانی و سلیقه خانواده‌های ایرانی.'
    },
    {
      title: 'زیبایی که ماندگار است',
      subtitle:
        'مقاومت، دوام و طراحی مینیمال برای سال‌ها استفاده روزمره.'
    },
    {
      title: 'جزیی از معماری آشپزخانه',
      subtitle:
        'محصولات نه فقط ابزار، بلکه بخشی از طراحی داخلی شما هستند.'
    },
    {
      title: 'انتخاب حرفه‌ای‌ها',
      subtitle:
        'پیشنهاد بسیاری از طراحان داخلی و مجریان آشپزخانه در سراسر ایران.'
    }
  ],
  en: [
    {
      title: 'MixPlus, the heart of your kitchen',
      subtitle:
        'Sinks, hobs, ovens and hoods inspired by Italian kitchen design.'
    },
    {
      title: 'European quality, made in Iran',
      subtitle: 'High–grade components engineered for everyday performance.'
    },
    {
      title: 'Small details, big differences',
      subtitle:
        'From steel thickness to burner layout, every detail is considered.'
    },
    {
      title: 'A kitchen that inspires',
      subtitle:
        'Light, materials and technology working together for better cooking.'
    },
    {
      title: 'Trusted by dealers, chosen by families',
      subtitle: 'A nationwide network of authorized MixPlus partners.'
    },
    {
      title: 'After–sales that actually cares',
      subtitle:
        'Transparent warranty terms, documented processes, responsive support.'
    },
    {
      title: 'Italian aesthetics, regional taste',
      subtitle: 'Designed to match local layouts and lifestyle.'
    },
    {
      title: 'Beauty that lasts',
      subtitle: 'Durable materials, timeless minimal lines.'
    },
    {
      title: 'Part of your architecture',
      subtitle: 'Appliances that integrate into the interior, not fight it.'
    },
    {
      title: 'Chosen by professionals',
      subtitle: 'Recommended by kitchen designers and contractors.'
    }
  ]
};

export const landingCopy = {
  fa: {
    brandTitle: 'میکس‌پلاس؛ استاندارد تازه‌ی آشپزخانه ایرانی',
    brandSubtitle:
      'برند میکس‌پلاس با تکیه بر قطعات باکیفیت و طراحی ایتالیایی، مجموعه‌ای کامل از سینک، گاز، فر و هود را برای آشپزخانه‌های مدرن ارائه می‌کند.',
    ctaProducts: 'مشاهده محصولات',
    ctaAbout: 'درباره میکس‌پلاس'
  },
  en: {
    brandTitle: 'MixPlus, a new standard for modern kitchens',
    brandSubtitle:
      'MixPlus brings Italian–inspired design and reliable components to built–in hobs, sinks, ovens and hoods.',
    ctaProducts: 'View products',
    ctaAbout: 'About MixPlus'
  }
};
