<div class="about-members-wrapper">
	<div class="members-title">Current Members</div>

	<?php if( have_rows('band_member_repeater') ): ?>

		<div class="members-wrapper">

		<?php while( have_rows('band_member_repeater') ): the_row(); 

			// vars
			$name = get_sub_field('member_name');
			$instrument = get_sub_field('member_instrument');
			$description = get_sub_field('member_description');
			$pic = get_sub_field('member_pic');

			?>

			<div class="member">

				<div class="member-text">
				
					<div class="member-name"><?php echo $name; ?></div>

					<div class="member-line"></div>

					<div class="member-instrument"><?php echo $instrument; ?></div>

					<div class="member-description"><?php echo $description; ?></div>
				</div>

			    <div class="member-pic" style="background-image: url(<?php echo $pic; ?>)"></div>

			</div>

		<?php endwhile; ?>

		</div>

	<?php endif; ?>

</div>