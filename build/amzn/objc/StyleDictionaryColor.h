
//
// StyleDictionaryColor.h
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
FNGColorTextBase,
FNGColorTextSecondary,
FNGColorTextTertiary,
FNGPaletteGrayLight,
FNGPaletteGrayMedium,
FNGPaletteGrayDark,
FNGPaletteRed,
FNGPaletteGreen,
UNKNColorBaseOrange
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
