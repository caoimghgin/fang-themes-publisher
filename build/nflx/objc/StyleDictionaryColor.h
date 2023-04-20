
//
// StyleDictionaryColor.h
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorFontBase,
ColorFontSecondary,
ColorFontTertiary,
ColorBaseGrayLight,
ColorBaseGrayMedium,
ColorBaseGrayDark,
ColorBaseRed,
ColorBaseGreen
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
