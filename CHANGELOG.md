# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Downgraded `react-native-screens` from `4.19.0` to `4.16.0` to fix "java.lang.String cannot be cast to java.lang.boolean" error in RNSScreenManagerDelegate on Android, due to incompatibility with Expo SDK 54's bundled native libraries.

## [1.0.0] - 2025-12-28

### Added
- Initial release of the demo health mobile app.
- Features include welcome screen, services list, order form, payment, orders list, and order details.
- Dependencies:
  - `@react-navigation/native`: ^7.1.26
  - `@react-navigation/stack`: ^7.6.13
  - `expo`: ~54.0.30
  - `react`: 19.1.0
  - `react-native`: 0.81.5
  - `react-native-screens`: 4.16.0 (after downgrade)
  - `react-native-safe-area-context`: ^5.6.2
  - `react-native-web`: ^0.21.0
  - And other dev dependencies.