export const homeQuery = `*[_type == "home"][0]{
  heroTagline,
  heroTitleLine1,
  heroTitleLine1Emphasis,
  heroTitleLine2,
  heroSubtitle
}`;

export const aboutQuery = `*[_type == "about"][0]{
  header{
    title,
    subtitle,
    image
  },
  intro{
    title,
    paragraphs,
    highlights,
    ctaLabel
  },
  visual{
    cardImage,
    cardTitle,
    cardSubtitle,
    stats[]{value, label},
    promiseTitle,
    promiseText
  }
}`;

export const servicesQuery = `*[_type == "services"][0]{
  header{
    title,
    subtitle
  },
  services[]{
    id,
    iconName,
    title,
    description
  },
  highlight{
    title,
    body,
    bullets,
    ctaLabel,
    ctaPhone
  }
}`;

export const locationQuery = `*[_type == "location"][0]{
  header{
    title,
    address
  },
  steps[]{
    title,
    text
  },
  tip{
    title,
    text
  },
  map{
    image,
    cardTitle,
    cardSubtitle,
    link,
    linkLabel
  }
}`;

export const testimonialsQuery = `*[_type == "testimonials"][0]{
  header{
    title,
    subtitle
  },
  reviews[]{
    id,
    name,
    role,
    location,
    content
  },
  cta{
    text,
    buttonLabel,
    email
  }
}`;

export const contactQuery = `*[_type == "contact"][0]{
  header{
    title,
    subtitle,
    image
  },
  info{
    title,
    addressTitle,
    addressLines,
    phoneTitle,
    phoneOffice,
    phoneMobile,
    emailTitle,
    email,
    hoursTitle,
    hoursLines,
    socialLabel,
    facebookUrl
  },
  form{
    title,
    subtitle,
    nameLabel,
    namePlaceholder,
    phoneLabel,
    phonePlaceholder,
    subjectLabel,
    subjectOptions,
    messageLabel,
    messagePlaceholder,
    submitLabel
  }
}`;
