'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { useTranslationContext } from '@/providers/TranslationProvider';
import Image from 'next/image';
import styles from './page.module.scss';

const popularArtists = [
  { id: 1, name: 'GIMS', type: 'Artiste', image: '/artists/gims.jpg' },
  { id: 2, name: 'Gazo', type: 'Artiste', image: '/artists/gazo.jpg' },
  { id: 3, name: 'Ninho', type: 'Artiste', image: '/artists/ninho.jpg' },
  { id: 4, name: 'Jul', type: 'Artiste', image: '/artists/jul.jpg' },
  {
    id: 5,
    name: 'David Guetta',
    type: 'Artiste',
    image: '/artists/david-guetta.jpg',
  },
  {
    id: 6,
    name: 'Lady Gaga',
    type: 'Artiste',
    image: '/artists/lady-gaga.jpg',
  },
  {
    id: 7,
    name: 'The Weeknd',
    type: 'Artiste',
    image: '/artists/the-weeknd.jpg',
  },
  { id: 8, name: 'SDM', type: 'Artiste', image: '/artists/sdm.jpg' },
];

export default function Home() {
  const { t } = useTranslationContext();

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('common.welcome')}</h1>
          <br />
        </div>

        <section>
          <h2 className={styles.sectionTitle}>{t('common.popularArtists')}</h2>
          <div className={styles.artistsGrid}>
            {popularArtists.map(artist => (
              <div key={artist.id} className={styles.artistCard}>
                <Image
                  src={artist.image}
                  alt={artist.name}
                  className={styles.artistImage}
                  width={180}
                  height={180}
                />
                <h3 className={styles.artistName}>{artist.name}</h3>
                <p className={styles.artistType}>{artist.type}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
