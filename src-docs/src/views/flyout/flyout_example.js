import React from 'react';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import {
  EuiCode,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
} from '../../../../src/components';

import { Flyout } from './flyout';
const flyoutSource = require('!!raw-loader!./flyout');
const flyoutHtml = renderToHtml(Flyout);

import { FlyoutComplicated } from './flyout_complicated';
const flyoutComplicatedSource = require('!!raw-loader!./flyout_complicated');
const flyoutComplicatedHtml = renderToHtml(FlyoutComplicated);

import { FlyoutSmall } from './flyout_small';
const flyoutSmallSource = require('!!raw-loader!./flyout_small');
const flyoutSmallHtml = renderToHtml(FlyoutSmall);

import { FlyoutLarge } from './flyout_large';
const flyoutLargeSource = require('!!raw-loader!./flyout_large');
const flyoutLargeHtml = renderToHtml(FlyoutLarge);

import { FlyoutMaxWidth } from './flyout_max_width';
const flyoutMaxWidthSource = require('!!raw-loader!./flyout_max_width');
const flyoutMaxWidthHtml = renderToHtml(FlyoutMaxWidth);

export const FlyoutExample = {
  title: 'Flyout',
  sections: [
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: flyoutSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: flyoutHtml,
        },
      ],
      text: (
        <div>
          <p>
            <EuiCode>EuiFlyout</EuiCode> is a fixed position panel that pops in
            from the right side of the screen. It should be used any time you
            need to perform quick, individual actions to a larger page or list.
          </p>

          <ul>
            <li>
              <EuiCode>size</EuiCode> accepts <EuiCode>s / m / l</EuiCode> and
              defines the width of the panel.
            </li>
            <li>
              <EuiCode>ownFocus</EuiCode> is a boolean that when{' '}
              <EuiCode>true</EuiCode> will lock the mouse / keyboard focus to
              within the flyout. It is off by default.
            </li>
            <li>
              <EuiCode>maxWidth</EuiCode> accepts a boolean or number. When set
              to <EuiCode>true</EuiCode>, it adds a predefined maxWidth, or you
              can pass an integer to set the max width to a custom pixel value
              or pass a string to set it to a custom measurement.
            </li>
          </ul>

          <p>
            Notice how these examples use <EuiCode>aria-labelledby</EuiCode> to
            announce the flyout to screen readers when the user opens it.
          </p>
        </div>
      ),
      props: { EuiFlyout, EuiFlyoutHeader },
      demo: <Flyout />,
    },
    {
      title: 'More complicated flyout',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: flyoutComplicatedSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: flyoutComplicatedHtml,
        },
      ],
      text: (
        <p>
          In this example we use <EuiCode>EuiFlyoutHeader</EuiCode> and
          <EuiCode>EuiFlyoutFooter</EuiCode> to allow for fixed position
          navigation and actions within a flyout. Note that any content within{' '}
          <EuiCode>EuiContentBody</EuiCode> will automatically overflow.
        </p>
      ),
      props: { EuiFlyoutFooter },
      demo: <FlyoutComplicated />,
    },
    {
      title: 'Small flyout, ownFocus',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: flyoutSmallSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: flyoutSmallHtml,
        },
      ],
      text: (
        <p>
          In this example, we set <EuiCode>size</EuiCode> to{' '}
          <EuiCode>s</EuiCode> and apply the <EuiCode>ownFocus</EuiCode> prop.
          The latter not only traps the focus of our flyout, but also adds
          background overlay to reinforce your boundaries.
        </p>
      ),
      demo: <FlyoutSmall />,
    },
    {
      title: 'Large flyout',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: flyoutLargeSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: flyoutLargeHtml,
        },
      ],
      text: (
        <p>
          In this example, we set <EuiCode>size</EuiCode> to{' '}
          <EuiCode>l</EuiCode>.
        </p>
      ),
      demo: <FlyoutLarge />,
    },
    {
      title: 'maxWidth',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: flyoutMaxWidthSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: flyoutMaxWidthHtml,
        },
      ],
      text: (
        <p>
          In this example, we set <EuiCode>maxWidth</EuiCode> to{' '}
          <EuiCode>448px</EuiCode>, to set the width of the flyout at the ideal
          width for a form.
        </p>
      ),
      demo: <FlyoutMaxWidth />,
    },
  ],
};
