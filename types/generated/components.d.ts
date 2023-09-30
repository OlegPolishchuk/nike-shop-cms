import type { Schema, Attribute } from '@strapi/strapi';

export interface EntityShoeOption extends Schema.Component {
  collectionName: 'components_entity_shoe_options';
  info: {
    displayName: 'ShoeOption';
  };
  attributes: {
    medias: Attribute.Media;
  };
}

export interface LayoutHeaderLinkList extends Schema.Component {
  collectionName: 'components_layout_header_link_lists';
  info: {
    displayName: 'HeaderLinkList';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
  };
}

export interface SettingsBannerSection extends Schema.Component {
  collectionName: 'components_settings_banner_sections';
  info: {
    displayName: 'BannerSection';
  };
  attributes: {
    show: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface UiBannerCard extends Schema.Component {
  collectionName: 'components_ui_banner_cards';
  info: {
    displayName: 'BannerCard';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

export interface UiFigure extends Schema.Component {
  collectionName: 'components_ui_figures';
  info: {
    displayName: 'figure';
    description: '';
  };
  attributes: {
    caption: Attribute.String;
    LinkButton: Attribute.Component<'ui.button', true>;
    image: Attribute.Media;
  };
}

export interface UiLinkList extends Schema.Component {
  collectionName: 'components_ui_link_lists';
  info: {
    displayName: 'LinkList';
  };
  attributes: {
    Link: Attribute.Component<'ui.link', true> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
  };
}

export interface UiMembershipCard extends Schema.Component {
  collectionName: 'components_ui_membership_cards';
  info: {
    displayName: 'MembershipCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface UiShoeCardForCarousel extends Schema.Component {
  collectionName: 'components_ui_shoe_card_for_carousels';
  info: {
    displayName: 'ShoeCardForCarousel';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    tag: Attribute.String & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface UiTrendCard extends Schema.Component {
  collectionName: 'components_ui_trend_cards';
  info: {
    displayName: 'TrendCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'entity.shoe-option': EntityShoeOption;
      'layout.header-link-list': LayoutHeaderLinkList;
      'settings.banner-section': SettingsBannerSection;
      'ui.banner-card': UiBannerCard;
      'ui.button': UiButton;
      'ui.figure': UiFigure;
      'ui.link-list': UiLinkList;
      'ui.link': UiLink;
      'ui.membership-card': UiMembershipCard;
      'ui.shoe-card-for-carousel': UiShoeCardForCarousel;
      'ui.trend-card': UiTrendCard;
    }
  }
}
