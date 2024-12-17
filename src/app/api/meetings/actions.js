'use server'

import prisma from '@/app/api/lib/db'

export async function add_meeting({
	meetings_feedback: meetings_feedback,
	meetings_egc: meetings_egc,
	meetings_billed: meetings_billed,
	meetings_value: meetings_value,
	meeting_time: meetings_time,
	meetings_for: meetings_for,
	meetings_client_id: meetings_client_id, // foreign key
	meetings_prospect_id: meetings_prospect_id, // foregin key
	meetings_notes: meetings_notes,
	meetings_team: meetings_team,
}) {
	return await prisma.meetings.create({
		data: {
			meetings_feedback: meetings_feedback,
			meetings_egc: meetings_egc,
			meetings_billed: meetings_billed,
			meetings_value: meetings_value,
			meetings_time: meetings_time,
			meetings_client_id: meetings_client_id,
			meetings_for: meetings_for,
			meetings_prospect_id: meetings_prospect_id,
			meetings_notes: meetings_notes,
			meetings_team: meetings_team
		}
	})
}

export async function edit_meeting({
	meeetings_id: meetings_id,
	meetings_feedback: meetings_feedback,
	meetings_egc: meetings_egc,
	meetings_billed: meetings_billed,
	meetings_value: meetings_value,
	meeting_time: meetings_time,
	meetings_for: meetings_for,
	meetings_client_id: meetings_client_id, // foreign key
	meetings_prospect_id: meetings_prospect_id, // foregin key
	meetings_notes: meetings_notes,
	meetings_team: meetings_team,
}) {
	return await prisma.meetings.update({
		data: {
			meetings_feedback: meetings_feedback,
			meetings_egc: meetings_egc,
			meetings_billed: meetings_billed,
			meetings_value: meetings_value,
			meetings_time: meetings_time,
			meetings_client_id: meetings_client_id,
			meetings_for: meetings_for,
			meetings_prospect_id: meetings_prospect_id,
			meetings_notes: meetings_notes,
			meetings_team: meetings_team
		},
		where: {
			meetings_id: meetings_id
		}
	})
}

export async function delete_meeting({
	meetings_id: meetings_id
}) {
	return await prisma.meetings.delete({
		where: {
			meetings_id: meetings_id
		}
	})
}

export async function get_all_meeting(){
	return await prisma.meetings.findMany()
}