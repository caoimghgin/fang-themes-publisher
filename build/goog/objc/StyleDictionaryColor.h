
//
// StyleDictionaryColor.h
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
UNKNColorFontBase,
UNKNColorFontSecondary,
UNKNColorFontTertiary,
FANGPaletteGrayLight,
FANGPaletteGrayMedium,
FANGPaletteGrayDark,
FANGPaletteRed,
FANGPaletteGreen
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
