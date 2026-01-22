import { Organization, WithContext, FAQPage, Event } from 'schema-dts'
import { ORG } from './org'
import { FOUNDING_YEAR, FIRST_EVENT, UPCOMING_EVENT_2026, getEventStatus, LINKS } from './sinceai'

/**
 * Generate Organization schema for Since AI
 * Injected globally in root layout for LLM/SEO discoverability
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.baseUrl,
    logo: `${ORG.baseUrl}/assets/logo/SINCE AI full black.png`,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Business ID',
      value: ORG.businessId,
    },
    description:
      "Since AI is Europe's AI builders community with 500+ members. Founded in 2025, we launched with our flagship hackathon bringing 260 builders together at EduCity, Turku to build real-world AI solutions with partner companies.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORG.location.city,
      addressCountry: ORG.location.countryCode,
    },
    sameAs: [
      ORG.social.discord,
      ORG.social.linkedin,
      ORG.social.instagram,
      ORG.social.x,
      ORG.social.github,
      ORG.social.facebook,
    ],
    foundingDate: FOUNDING_YEAR.toString(),
    contactPoint: {
      '@type': 'ContactPoint',
      email: ORG.contact.generalEmail,
      contactType: 'General Inquiries',
      areaServed: ORG.location.countryCode,
      availableLanguage: 'English',
    },
  }
}

/**
 * Generate FAQPage schema
 * @param faqItems - Array of {question: string, answer: string}
 */
export function getFAQSchema(
  faqItems: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Generate Event schema for hackathons
 * @param event - Event details
 */
export function getEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  organizer?: string
  url?: string
  eventStatus?: 'scheduled' | 'past' | 'cancelled'
  attendees?: number
  image?: string
}): WithContext<Event> {
  const statusMap = {
    scheduled: 'https://schema.org/EventScheduled' as const,
    past: 'https://schema.org/EventScheduled' as const, // Use EventScheduled for past events (EventPassed is not in schema.org)
    cancelled: 'https://schema.org/EventCancelled' as const,
  }

  const baseSchema: WithContext<Event> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: statusMap[event.eventStatus || 'scheduled'] as Event['eventStatus'],
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Turku',
        addressCountry: 'FI',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: event.organizer || ORG.name,
      url: event.url || ORG.baseUrl,
    },
  }

  // Add optional fields
  if (event.image) {
    baseSchema.image = event.image
  }

  return baseSchema
}

/**
 * Get the First Event (flagship hackathon) schema
 * Uses the FIRST_EVENT constant for consistency
 */
export function getFirstEventSchema(): WithContext<Event> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: FIRST_EVENT.name,
    description: `Since AI's flagship launch event brought together ${FIRST_EVENT.attendance} AI builders to collaborate on real-world projects with partner companies in Turku, Finland.`,
    url: LINKS.lumaHackathon2025,
    startDate: FIRST_EVENT.startDate,
    endDate: FIRST_EVENT.endDate,
    eventStatus: getEventStatus() as Event['eventStatus'],
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: FIRST_EVENT.locationName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: FIRST_EVENT.addressLocality,
        addressCountry: FIRST_EVENT.addressCountry,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.baseUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/SoldOut',
    },
  }
}

/**
 * Get the Upcoming 2026 Event schema
 * No exact dates yet - uses "November 2026"
 */
export function getUpcoming2026EventSchema(): WithContext<Event> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: UPCOMING_EVENT_2026.name,
    description: `${UPCOMING_EVENT_2026.name} will be held in ${UPCOMING_EVENT_2026.month} ${UPCOMING_EVENT_2026.year} in Turku, Finland. ${UPCOMING_EVENT_2026.dateNote}`,
    url: LINKS.lumaOrg,
    eventStatus: 'https://schema.org/EventScheduled' as Event['eventStatus'],
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: UPCOMING_EVENT_2026.city,
        addressCountry: UPCOMING_EVENT_2026.country,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.baseUrl,
    },
  }
}
