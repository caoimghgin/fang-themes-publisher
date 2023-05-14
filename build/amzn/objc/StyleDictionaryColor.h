
//
// StyleDictionaryColor.h
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
FANGColorTextBase,
FANGColorTextSecondary,
FANGColorTextTertiary,
FANGPaletteGrayLight,
FANGPaletteGrayMedium,
FANGPaletteGrayDark,
FANGPaletteRed,
FANGPaletteGreen,
UNKNColorBaseOrange
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
