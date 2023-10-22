import type { Schema, Attribute } from '@strapi/strapi';

export interface EntityShoeOption extends Schema.Component {
  collectionName: 'components_entity_shoe_options';
  info: {
    displayName: 'ShoeOption';
    description: '';
  };
  attributes: {
    medias: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    tag: Attribute.String & Attribute.Required;
    priceSt: Attribute.String;
    description: Attribute.RichText;
    mainImage: Attribute.Media & Attribute.Required;
    price: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<100>;
  };
}

export interface KidSizes15Y extends Schema.Component {
  collectionName: 'components_kid_sizes_1_5_ys';
  info: {
    displayName: '1.5Y';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'1.5Y'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes1Y extends Schema.Component {
  collectionName: 'components_kid_sizes_1_ys';
  info: {
    displayName: '1Y';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'1Y'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes105C extends Schema.Component {
  collectionName: 'components_kid_sizes_10_5_cs';
  info: {
    displayName: '10.5C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'10.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes115C extends Schema.Component {
  collectionName: 'components_kid_sizes_11_5_cs';
  info: {
    displayName: '11.5C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'11.5C'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes11C extends Schema.Component {
  collectionName: 'components_kid_sizes_11_cs';
  info: {
    displayName: '11C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'11C'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes125C extends Schema.Component {
  collectionName: 'components_kid_sizes_12_5_cs';
  info: {
    displayName: '12.5C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'12.5C'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes12C extends Schema.Component {
  collectionName: 'components_kid_sizes_12_cs';
  info: {
    displayName: '12C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'12C'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes135C extends Schema.Component {
  collectionName: 'components_kid_sizes_13_5_cs';
  info: {
    displayName: '13.5C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'13.5C'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes13C extends Schema.Component {
  collectionName: 'components_kid_sizes_13_cs';
  info: {
    displayName: '13C';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'13C'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes25Y extends Schema.Component {
  collectionName: 'components_kid_sizes_2_5_ys';
  info: {
    displayName: '2.5Y';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'2.5Y'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes2Y extends Schema.Component {
  collectionName: 'components_kid_sizes_2_ys';
  info: {
    displayName: '2Y';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'2Y'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface KidSizes3Y extends Schema.Component {
  collectionName: 'components_kid_sizes_3_ys';
  info: {
    displayName: '3Y';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'3Y'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
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

export interface MenSizesM105W12 extends Schema.Component {
  collectionName: 'components_men_sizes_m10_5_w12s';
  info: {
    displayName: 'M10.5/W12';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 10.5 / W 12'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM10W115 extends Schema.Component {
  collectionName: 'components_men_sizes_m10_w11_5s';
  info: {
    displayName: 'M10/W11.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 10 / W 11.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM115W13 extends Schema.Component {
  collectionName: 'components_men_sizes_m11_5_w13s';
  info: {
    displayName: 'M11.5/W13';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 11.5 / W 13'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM11W125 extends Schema.Component {
  collectionName: 'components_men_sizes_m11_w12_5s';
  info: {
    displayName: 'M11/W12.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 11 / W 12.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM125W14 extends Schema.Component {
  collectionName: 'components_men_sizes_m12_5_w14s';
  info: {
    displayName: 'M12.5/W14';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 12.5 / W 14'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM12W135 extends Schema.Component {
  collectionName: 'components_men_sizes_m12_w13_5s';
  info: {
    displayName: 'M12/W13.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 12 / W 13.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM13W145 extends Schema.Component {
  collectionName: 'components_men_sizes_m13_w14_5s';
  info: {
    displayName: 'M13/W14.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 13 / W 14.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM14W155 extends Schema.Component {
  collectionName: 'components_men_sizes_m14_w15_5s';
  info: {
    displayName: 'M14/W15.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 14 / W 15.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM15W165 extends Schema.Component {
  collectionName: 'components_men_sizes_m15_w16_5s';
  info: {
    displayName: 'M15/W16.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 15 / W 16.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM16W175 extends Schema.Component {
  collectionName: 'components_men_sizes_m16_w17_5s';
  info: {
    displayName: 'M16/W17.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 16 / W 17.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM17W185 extends Schema.Component {
  collectionName: 'components_men_sizes_m17_w18_5s';
  info: {
    displayName: 'M17/W18.5';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 17 / W 18.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM18W195 extends Schema.Component {
  collectionName: 'components_men_sizes_m17_w19_5s';
  info: {
    displayName: 'M18/W19.5';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 18 / W 19.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM75W9 extends Schema.Component {
  collectionName: 'components_men_sizes_m7_5_w9s';
  info: {
    displayName: 'M7.5/W9';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 7.5 / W 9'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM7W85 extends Schema.Component {
  collectionName: 'components_men_sizes_m7_w8_5s';
  info: {
    displayName: 'M7/W8.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 7 / W 8.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM85W10 extends Schema.Component {
  collectionName: 'components_men_sizes_m8_5_w10s';
  info: {
    displayName: 'M8.5/W10';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 8.5 / W 10'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM8W95 extends Schema.Component {
  collectionName: 'components_men_sizes_m8_w9_5s';
  info: {
    displayName: 'M8/W9.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 8 / W 9.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM95W11 extends Schema.Component {
  collectionName: 'components_men_sizes_m9_5_w11s';
  info: {
    displayName: 'M9.5/W11';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 9.5 / W 11'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MenSizesM9W105 extends Schema.Component {
  collectionName: 'components_men_sizes_m9_w10_5s';
  info: {
    displayName: 'M9/W10.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'M 9 / W 10.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
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

export interface SettingsKidSizes extends Schema.Component {
  collectionName: 'components_settings_kid_sizes';
  info: {
    displayName: 'KidSizes';
  };
  attributes: {
    c105: Attribute.Component<'kid-sizes.10-5-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    c11: Attribute.Component<'kid-sizes.11-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    c115: Attribute.Component<'kid-sizes.11-5-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    c12: Attribute.Component<'kid-sizes.12-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    c125: Attribute.Component<'kid-sizes.12-5-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    c13: Attribute.Component<'kid-sizes.13-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    c135: Attribute.Component<'kid-sizes.13-5-c'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    y1: Attribute.Component<'kid-sizes.1-y'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    y15: Attribute.Component<'kid-sizes.1-5-y'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    y2: Attribute.Component<'kid-sizes.2-y'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    y25: Attribute.Component<'kid-sizes.2-5-y'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    y3: Attribute.Component<'kid-sizes.3-y'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SettingsMenSizes extends Schema.Component {
  collectionName: 'components_settings_men_sizes';
  info: {
    displayName: 'MenSizes';
    description: '';
  };
  attributes: {
    m7: Attribute.Component<'men-sizes.m7-w8-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m75: Attribute.Component<'men-sizes.m7-5-w9'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m8: Attribute.Component<'men-sizes.m8-w9-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m85: Attribute.Component<'men-sizes.m8-5-w10'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m9: Attribute.Component<'men-sizes.m9-w10-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    n95: Attribute.Component<'men-sizes.m9-5-w11'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m10: Attribute.Component<'men-sizes.m10-w11-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m105: Attribute.Component<'men-sizes.m10-5-w12'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m11: Attribute.Component<'men-sizes.m11-w12-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m115: Attribute.Component<'men-sizes.m11-5-w13'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m12: Attribute.Component<'men-sizes.m12-w13-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m125: Attribute.Component<'men-sizes.m12-5-w14'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m13: Attribute.Component<'men-sizes.m13-w14-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m14: Attribute.Component<'men-sizes.m14-w15-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m15: Attribute.Component<'men-sizes.m15-w16-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m16: Attribute.Component<'men-sizes.m16-w17-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m17: Attribute.Component<'men-sizes.m17-w18-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    m18: Attribute.Component<'men-sizes.m18-w19-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SettingsSize extends Schema.Component {
  collectionName: 'components_settings_sizes';
  info: {
    displayName: 'SizeEntity';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface SettingsWomenSizes extends Schema.Component {
  collectionName: 'components_settings_women_sizes';
  info: {
    displayName: 'WomenSizes';
  };
  attributes: {
    w5: Attribute.Component<'women-sizes.w5-m3-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w55: Attribute.Component<'women-sizes.w5-5-m4'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w6: Attribute.Component<'women-sizes.w6-m4-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w65: Attribute.Component<'women-sizes.w6-5-m5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w7: Attribute.Component<'women-sizes.w7-m5-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w75: Attribute.Component<'women-sizes.w7-5-m6'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w8: Attribute.Component<'women-sizes.w8-m6-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w85: Attribute.Component<'women-sizes.w8-5-m7'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w9: Attribute.Component<'women-sizes.w9-m7-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w95: Attribute.Component<'women-sizes.w9-5-m8'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w10: Attribute.Component<'women-sizes.w10-m8-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w105: Attribute.Component<'women-sizes.w10-5-m9'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w11: Attribute.Component<'women-sizes.w11-m9-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w115: Attribute.Component<'women-sizes.w11-5-m10'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    w12: Attribute.Component<'women-sizes.w12-m10-5'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
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
    section_shoes: Attribute.Relation<
      'ui.shoe-card-for-carousel',
      'oneToMany',
      'api::section-shoe.section-shoe'
    >;
  };
}

export interface UiSizes extends Schema.Component {
  collectionName: 'components_ui_sizes';
  info: {
    displayName: 'Sizes';
    description: '';
  };
  attributes: {
    Sizes: Attribute.Component<'settings.size', true> & Attribute.Required;
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

export interface WomenSizesW105M9 extends Schema.Component {
  collectionName: 'components_women_sizes_w10_5_m9s';
  info: {
    displayName: 'W10.5/M9';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 10.5 / M 9'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW10M85 extends Schema.Component {
  collectionName: 'components_women_sizes_w10_m8_5s';
  info: {
    displayName: 'W10/M8.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 10 / M 8.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW115M10 extends Schema.Component {
  collectionName: 'components_women_sizes_w11_5_m10s';
  info: {
    displayName: 'W11.5/M10';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 11.5 / M 10'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW11M95 extends Schema.Component {
  collectionName: 'components_women_sizes_w11_m9_5s';
  info: {
    displayName: 'W11/M9.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 11 / M 9.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW12M105 extends Schema.Component {
  collectionName: 'components_women_sizes_w12_m10_5s';
  info: {
    displayName: 'W12/M10.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 12 / M 10.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW55M4 extends Schema.Component {
  collectionName: 'components_women_sizes_w5_5_m4s';
  info: {
    displayName: 'W5.5/M4';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 5.5 / M 4'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW5M35 extends Schema.Component {
  collectionName: 'components_women_sizes_w5_m3_5s';
  info: {
    displayName: 'W5/M3.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 5 / M 3.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW65M5 extends Schema.Component {
  collectionName: 'components_women_sizes_w6_5_m5s';
  info: {
    displayName: 'W6.5/M5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 6.5 / M 5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW6M45 extends Schema.Component {
  collectionName: 'components_women_sizes_w6_m4_5s';
  info: {
    displayName: 'W6/M4.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 6 / M 4.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW75M6 extends Schema.Component {
  collectionName: 'components_women_sizes_w7_5_m6s';
  info: {
    displayName: 'W7.5/M6';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 7.5 / M 6'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW7M55 extends Schema.Component {
  collectionName: 'components_women_sizes_w7_m5_5s';
  info: {
    displayName: 'W7/M5.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 7 / M 5.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW85M7 extends Schema.Component {
  collectionName: 'components_women_sizes_w8_5_m7s';
  info: {
    displayName: 'W8.5/M7';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 8.5 / M 7'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW8M65 extends Schema.Component {
  collectionName: 'components_women_sizes_w8_m6_5s';
  info: {
    displayName: 'W8/M6.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 8 / M 6.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW95M8 extends Schema.Component {
  collectionName: 'components_women_sizes_w9_5_m8s';
  info: {
    displayName: 'W9.5/M8';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 9.5 / M 8'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WomenSizesW9M75 extends Schema.Component {
  collectionName: 'components_women_sizes_w9_m7_5s';
  info: {
    displayName: 'W9/M7.5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'W 9 / M 7.5'>;
    inStock: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'entity.shoe-option': EntityShoeOption;
      'kid-sizes.1-5-y': KidSizes15Y;
      'kid-sizes.1-y': KidSizes1Y;
      'kid-sizes.10-5-c': KidSizes105C;
      'kid-sizes.11-5-c': KidSizes115C;
      'kid-sizes.11-c': KidSizes11C;
      'kid-sizes.12-5-c': KidSizes125C;
      'kid-sizes.12-c': KidSizes12C;
      'kid-sizes.13-5-c': KidSizes135C;
      'kid-sizes.13-c': KidSizes13C;
      'kid-sizes.2-5-y': KidSizes25Y;
      'kid-sizes.2-y': KidSizes2Y;
      'kid-sizes.3-y': KidSizes3Y;
      'layout.header-link-list': LayoutHeaderLinkList;
      'men-sizes.m10-5-w12': MenSizesM105W12;
      'men-sizes.m10-w11-5': MenSizesM10W115;
      'men-sizes.m11-5-w13': MenSizesM115W13;
      'men-sizes.m11-w12-5': MenSizesM11W125;
      'men-sizes.m12-5-w14': MenSizesM125W14;
      'men-sizes.m12-w13-5': MenSizesM12W135;
      'men-sizes.m13-w14-5': MenSizesM13W145;
      'men-sizes.m14-w15-5': MenSizesM14W155;
      'men-sizes.m15-w16-5': MenSizesM15W165;
      'men-sizes.m16-w17-5': MenSizesM16W175;
      'men-sizes.m17-w18-5': MenSizesM17W185;
      'men-sizes.m18-w19-5': MenSizesM18W195;
      'men-sizes.m7-5-w9': MenSizesM75W9;
      'men-sizes.m7-w8-5': MenSizesM7W85;
      'men-sizes.m8-5-w10': MenSizesM85W10;
      'men-sizes.m8-w9-5': MenSizesM8W95;
      'men-sizes.m9-5-w11': MenSizesM95W11;
      'men-sizes.m9-w10-5': MenSizesM9W105;
      'settings.banner-section': SettingsBannerSection;
      'settings.kid-sizes': SettingsKidSizes;
      'settings.men-sizes': SettingsMenSizes;
      'settings.size': SettingsSize;
      'settings.women-sizes': SettingsWomenSizes;
      'ui.banner-card': UiBannerCard;
      'ui.button': UiButton;
      'ui.figure': UiFigure;
      'ui.link-list': UiLinkList;
      'ui.link': UiLink;
      'ui.membership-card': UiMembershipCard;
      'ui.shoe-card-for-carousel': UiShoeCardForCarousel;
      'ui.sizes': UiSizes;
      'ui.trend-card': UiTrendCard;
      'women-sizes.w10-5-m9': WomenSizesW105M9;
      'women-sizes.w10-m8-5': WomenSizesW10M85;
      'women-sizes.w11-5-m10': WomenSizesW115M10;
      'women-sizes.w11-m9-5': WomenSizesW11M95;
      'women-sizes.w12-m10-5': WomenSizesW12M105;
      'women-sizes.w5-5-m4': WomenSizesW55M4;
      'women-sizes.w5-m3-5': WomenSizesW5M35;
      'women-sizes.w6-5-m5': WomenSizesW65M5;
      'women-sizes.w6-m4-5': WomenSizesW6M45;
      'women-sizes.w7-5-m6': WomenSizesW75M6;
      'women-sizes.w7-m5-5': WomenSizesW7M55;
      'women-sizes.w8-5-m7': WomenSizesW85M7;
      'women-sizes.w8-m6-5': WomenSizesW8M65;
      'women-sizes.w9-5-m8': WomenSizesW95M8;
      'women-sizes.w9-m7-5': WomenSizesW9M75;
    }
  }
}
