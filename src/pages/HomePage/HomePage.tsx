import React from 'react';
import { PageLayout } from '../../components/common/Layout/PageLayout';
import { HeroSection } from '../../components/home/HeroSection/HeroSection';
import { ExperienceSection } from '../../components/home/ExperienceSection/ExperienceSection';
import { TableSection } from '../../components/home/TableSection/TableSection';
import { EventsSection } from '../../components/home/EventsSection/EventsSection';
import { ShopSection } from '../../components/home/ShopSection/ShopSection';
import { InfoSection } from '../../components/home/InfoSection/InfoSection';

/**
 * HOMEPAGE COMPONENT
 * REBUILT FOR HIGH FIDELITY
 */
export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <HeroSection />
            <ExperienceSection />
            <TableSection />
            <EventsSection />
            <ShopSection />
            <InfoSection />
        </PageLayout>
    );
};
