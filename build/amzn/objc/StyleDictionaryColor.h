
//
// StyleDictionaryColor.h
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
UNKNColorFontBase,
UNKNColorFontSecondary,
UNKNColorFontTertiary,
UNKNColorBaseGrayLight,
UNKNColorBaseGrayMedium,
UNKNColorBaseGrayDark,
UNKNColorBaseRed,
UNKNColorBaseGreen,
UNKNColorBaseOrange
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
